import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { taskStatsState } from '../../services/stateService/stateService';
import { useRecoilValue } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            marginTop: "20px"
        }
    })
);


export default function TaskStats() {
    const classes = useStyle();
    const stats = useRecoilValue(taskStatsState);

    return (
        <div className={classes.container}>
            <Grid container spacing={0}>
                <Grid item xs={4} >
                    <Typography align="center"><b>{stats.total}</b> total</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography align="center"><b>{stats.completed}</b> completed</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography align="center"><b>{stats.uncompleted}</b> uncompleted</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

