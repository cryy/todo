import * as React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Task from '../../services/stateService/models/task';
import TaskItem from '../TaskItem/TaskItem';
import { filteredTasksState } from '../../services/stateService/stateService';
import { useRecoilValue } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            marginTop: "20px"
        },
        itemContainer: {
            paddingTop: "20px",
            paddingBottom: "20px"
        },
        taskName: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 600
        },
        taskNameCompleted: {
            textDecoration: "line-through"
        },
        gridItem: {
            textAlign: "center",
            justifyContent: "center"
        },
        gridItemName: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        },
        paper: {
            marginBottom: "120px"
        },
        highPriority: {
            color: "rgba(234, 23, 23, 0.64)"
        },
        normalPriority: {
            color: "rgba(42, 181, 51, 0.64)"
        },
        lowPriority: {
            color: "rgba(94, 94, 94, 0.44)"
        }
    })
);


export default function TaskList() {
    const classes = useStyle();
    const tasks = useRecoilValue(filteredTasksState);


    const sorted = getSortedTasks(tasks);

    return (
        <div className={classes.container}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <div className={classes.itemContainer}>
                            {sorted.length > 0 ?
                                (sorted.map(t => <TaskItem key={t.id} classes={classes} task={t} />))
                                :
                                <Typography align="center">No tasks here!</Typography>}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

function getSortedTasks(tasks: Task[]) {
    return [...tasks].sort((a, b) => {
        if (a.priority < b.priority)
            return 1;
        else if (a.priority > b.priority)
            return -1;
        else return 0;
    });
}

