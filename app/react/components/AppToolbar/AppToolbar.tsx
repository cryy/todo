import * as React from 'react';

import { AppBar, IconButton, Link, Menu, MenuItem, Toolbar, Typography, createStyles, makeStyles } from '@material-ui/core';
import { taskFilterState, tasksState } from '../../services/stateService/stateService';

import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import TaskFilter from '../../services/stateService/models/TaskFilter';
import { useSetRecoilState } from 'recoil';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        appBar: {
            boxShadow: "none"
        },
        title: {
            flexGrow: 1
        }
    })
);



export default function AppToolbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const setTasks = useSetRecoilState(tasksState);
    const setFilter = useSetRecoilState(taskFilterState);

    const open = Boolean(anchorEl);
    const classes = useStyle();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReset = () => {
        setTasks([]);
        setFilter(TaskFilter.All);
    };

    return <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                to-do
            </Typography>
            <div>
                <IconButton
                    color="inherit"
                    onClick={handleMenu}
                >
                    <SettingsRoundedIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <Link
                        href="https://github.com/cryy/todo"
                        target="_blank"
                        style={{ 
                            textDecoration: 'none', 
                            display: 'block' 
                        }}
                        >
                        <MenuItem>GitHub</MenuItem>
                    </Link>
                    <MenuItem onClick={handleReset}>Reset to default</MenuItem>
                </Menu>
            </div>
        </Toolbar>
    </AppBar>
}