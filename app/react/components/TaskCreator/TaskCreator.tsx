import * as React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import TaskCreatorProps from './TaskCreatorProps';
import TaskPriority from '../../services/stateService/models/TaskPriority';
import { tasksState } from '../../services/stateService/stateService';
import { useSetRecoilState } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            marginTop: "120px"
        },
        create: {
            width: "100%",
            height: "60px"
        },
        content: {
            width: "576px"
        },
        label: {
            fontSize: "1.1rem",
            marginBottom: "10px"
        },
        group: {
            flexDirection: "row"
        },
        section: {
            marginBottom: "25px"
        },
        width: {
            width: "100%"
        }
    })
);


export default function TaskCreator(props: TaskCreatorProps) {
    const classes = useStyle();

    const setTasks = useSetRecoilState(tasksState);

    const [name, setName] = React.useState<string | undefined>(undefined);
    const [description, setDescription] = React.useState<string | undefined>(undefined);
    const [priority, setPriority] = React.useState<TaskPriority>(TaskPriority.Normal);

    const canCreate = name !== undefined && name.length > 0 && name.trim();

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleCreate = () => {
        if (canCreate) {
            setTasks((old) => [
                ...old,
                {
                    id: Date.now(),
                    name: name,
                    description: description,
                    done: false,
                    priority: priority
                }
            ]);

            setName(undefined);
            setDescription(undefined);
            setPriority(TaskPriority.Normal);
            props.setOpen(false);
        }
    };

    const handleText = (event, name: boolean) => {
        const v = event.target.value;
        if (name) {
            if (v.length <= 40)
                setName(event.target.value);
        }
        else
            if (v.length <= 512)
                setDescription(event.target.value);

    };

    const handlePriority = (e) => {
        setPriority(parseInt(e.target.value));
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>Create a task</DialogTitle>
            <DialogContent>
                <div className={classes.section}>
                    <Typography className={classes.label}>
                        Task name
                        </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <TextField
                                variant="filled"
                                autoFocus
                                className={classes.width}
                                value={name}
                                onChange={(e) => handleText(e, true)}
                            />
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </div>

                <div className={classes.section}>
                    <Typography className={classes.label}>
                        (Optional) Task Description
                        </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <TextField
                                variant="filled"
                                multiline
                                rows={4}
                                className={classes.width}
                                value={description}
                                onChange={(e) => handleText(e, false)}
                            />
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>

                </div>

                <div className={classes.section}>
                    <Typography className={classes.label}>
                        Task Priority
                        </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="position"
                                    defaultValue="bottom"
                                    className={classes.group}
                                    value={priority}
                                    onChange={handlePriority}
                                >
                                    <FormControlLabel
                                        value={TaskPriority.Low}
                                        control={<Radio color="primary" />}
                                        label="Low"
                                    />
                                    <FormControlLabel
                                        value={TaskPriority.Normal}
                                        control={<Radio color="primary" />}
                                        label="Normal"
                                    />
                                    <FormControlLabel
                                        value={TaskPriority.High}
                                        control={<Radio color="primary" />}
                                        label="High"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Cancel
                 </Button>
                <Button
                    onClick={handleCreate}
                    disabled={!canCreate}
                    color="primary"
                    variant="contained"
                    disableElevation
                >
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

