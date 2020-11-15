import * as React from 'react';

import { Checkbox, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import TaskItemProps from './TaskItemProps';
import TaskPriority from '../../services/stateService/models/TaskPriority';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { tasksState } from '../../services/stateService/stateService';
import { useHistory } from "react-router-dom";
import { useRecoilState } from 'recoil';

export default function TaskItem(props: TaskItemProps) {

    const [tasks, setTasks] = useRecoilState(tasksState);
    const taskIndex = tasks.findIndex(t => t === props.task);
    const history = useHistory();

    const deleteTask = () => {
        setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
    };

    const checkTask = () => {
        setTasks([...tasks.slice(0, taskIndex), { ...props.task, done: !props.task.done }, ...tasks.slice(taskIndex + 1)]);
    };

    const handleTaskView = () => {
        history.push(`/${props.task.id}`);
    }

    const classes = props.classes;

    return (
        <div className={classes.container}>
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={2} className={classes.gridItem}>
                    <Checkbox
                        color="primary"
                        checked={props.task.done}
                        onChange={checkTask}
                    />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4} className={classes.gridItemName}
                    onClick={handleTaskView}
                >
                    {/* if a task is done, cross it out */}
                    <Typography className={classes.taskName + (props.task.done ? ` ${classes.taskNameCompleted}` : "")}>
                        {props.task.name}
                    </Typography>
                </Grid>
                <Grid item xs={1} className={`${classes.gridItem} ${classes.gridItemName}`}>
                    <Tooltip
                        title={`${getPriorityString(props.task.priority)} Priority`}
                    >
                        <WarningRoundedIcon style={{ color: getPriorityStyling(props.task.priority) }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <IconButton onClick={deleteTask}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div>
    );
}

export function getPriorityString(priority: TaskPriority) {
    switch (priority) {
        case TaskPriority.High:
            return "High";
        case TaskPriority.Normal:
            return "Normal";
        default:
            return "Low";
    }
}


export function getPriorityStyling(priority: TaskPriority) {
    switch (priority) {
        case TaskPriority.High:
            return "rgba(234, 23, 23, 0.64)";
        case TaskPriority.Normal:
            return "rgba(42, 181, 51, 0.64)";
        default:
            return "rgba(94, 94, 94, 0.44)";
    }
}

