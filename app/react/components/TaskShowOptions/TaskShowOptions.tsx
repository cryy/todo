import * as React from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import TaskFilter from '../../services/stateService/models/TaskFilter';
import { taskFilterState } from '../../services/stateService/stateService';
import { useRecoilState } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            marginTop: "20px"
        },
        group: {
            flexDirection: "row"
        },
        show: {
            fontSize: "1.1rem",
            fontWeight: 500
        }
    })
);


export default function TaskShowOptions() {
    const classes = useStyle();
    const [filter, setFilter] = useRecoilState(taskFilterState);

    const handleFilter = (e) => {
        setFilter(parseInt(e.target.value));
    };

    return (
        <div className={classes.container}>
            <Typography className={classes.show}>Show:</Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    name="position"
                    defaultValue="bottom"
                    className={classes.group}
                    value={filter}
                    onChange={handleFilter}
                >
                    <FormControlLabel
                        value={TaskFilter.All}
                        control={<Radio color="primary" />}
                        label="All"
                    />
                    <FormControlLabel
                        value={TaskFilter.Completed}
                        control={<Radio color="primary" />}
                        label="Completed"
                    />
                    <FormControlLabel
                        value={TaskFilter.Uncompleted}
                        control={<Radio color="primary" />}
                        label="Uncompleted"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

