import * as React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Tooltip, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getPriorityString, getPriorityStyling } from '../TaskItem/TaskItem';
import { useHistory, useParams } from "react-router-dom";

import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { tasksState } from '../../services/stateService/stateService';
import { useRecoilState } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        create: {
            width: "100%",
            height: "60px"
        },
        label: {
            fontSize: "1.1rem",
            marginBottom: "10px"
        },
        section: {
            marginBottom: "25px"
        },
        desc: {
            whiteSpace: "pre"
        },
        icon: {
            verticalAlign: "middle",
            marginRight: "4px"
        }
    })
);


export default function TaskView() {
    const history = useHistory();
    const { id } = useParams();

    //no proper id? redirect back to home
    if (!id)
        history.push("/");

    const numId = parseInt(id);
    //redirect to home if id is not a valid number
    if (!(numId && isFinite(numId)))
        history.push("/");

    const [tasks, setTasks] = useRecoilState(tasksState);
    const taskIndex = tasks.findIndex(t => t.id === numId);

    //if task is not found, redirect back to home
    if (taskIndex === -1)
        history.push("/");

    const task = tasks[taskIndex];

    const classes = useStyle();
    const [open, setOpen] = React.useState<boolean>(true);
    const priorityString = getPriorityString(task.priority);



    //we use setTimeout to let the exiting animation finish, then we delete the task if requested

    const handleDelete = () => {
        setOpen(false);
        setTimeout(() => {
            history.push("/");
            setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
        }, 225);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            history.push("/");
        }, 225);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>{task.name}</DialogTitle>
            <DialogContent>
                <div className={classes.section}>
                    <Typography className={classes.label}>
                        Description
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <Typography className={classes.desc}>
                                {task.description ? task.description : "None set."}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </div>

                <div className={classes.section}>
                    <Typography className={classes.label}>
                        Priority
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <Typography>
                                <Tooltip
                                    title={`${priorityString} Priority`}
                                >
                                    <span>
                                        <WarningRoundedIcon
                                            className={classes.icon}
                                            style={{ color: getPriorityStyling(task.priority), marginTop: "-8px" }}
                                        />
                                        {priorityString}
                                    </span>
                                </Tooltip>
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </div>

                <div className={classes.section}>
                    <Typography className={classes.label}>
                        Status
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <Typography>
                                {task.done ?
                                    <span>
                                        <CheckBoxRoundedIcon
                                            className={classes.icon}
                                            style={{ marginTop: "-3px" }}
                                            color="primary"
                                        />
                                        Completed!
                                    </span>
                                    :
                                    <span>
                                        <IndeterminateCheckBoxRoundedIcon
                                            className={classes.icon}
                                            style={{ marginTop: "-3px" }}
                                            color="primary"
                                        />
                                        Uncompleted
                                    </span>
                                }
                            </Typography>
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
                    Close
                 </Button>
                <Button
                    onClick={handleDelete}
                    color="primary"
                    variant="contained"
                    disableElevation
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

