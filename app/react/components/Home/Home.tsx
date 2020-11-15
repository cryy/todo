import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import TaskCreation from '../TaskCreation/TaskCreation';
import TaskList from '../TaskList/TaskList';
import TaskShowOptions from '../TaskShowOptions/TaskShowOptions';
import TaskStats from '../TaskStats/TaskStats';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            position: "fixed",
            overflowY: "auto",
            width: "100%"
        },
        tasksHeadline: {
            marginTop: "120px"
        }
    })
);


export default function Home() {

    const classes = useStyle();


    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={1} md={3} />
                <Grid item xs={10} md={6}>
                    <TaskCreation />
                    <TaskStats />
                </Grid>
                <Grid item xs={1} md={3} />
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} md={3}>
                    <Typography
                        align="center"
                        variant="h4"
                        className={classes.tasksHeadline}
                    >
                        Your tasks
                    </Typography>
                </Grid>
                <Grid item xs={false} md={9} />
                <Grid item xs={1} md={2} />
                <Grid item xs={10} md={8}>
                    {/* split options into its own component to prevent performance impact with rendering */}
                    <TaskShowOptions />
                </Grid>
                <Grid item xs={1} md={2} />
                <Grid item xs={1} md={3} />
                <Grid item xs={10} md={6}>
                    <TaskList />
                </Grid>
                <Grid item xs={1} md={3} />
            </Grid>
        </React.Fragment>
    );
}

