import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import TaskCreator from '../TaskCreator/TaskCreator';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            marginTop: "120px"
        },
        create: {
            width: "100%",
            height: "60px",
            fontWeight: 800
        }
    })
);


export default function TaskCreation() {
    const classes = useStyle();

    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            {/* Creation provides the button, Creator provides the modal for actually creating a task */}
            <TaskCreator open={open} setOpen={setOpen} />
            <div className={classes.container}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.create}
                    onClick={handleOpen}
                >
                    Create new task
                </Button>
            </div>
        </React.Fragment>
    );
}

