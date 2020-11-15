import * as React from 'react';

import { MuiThemeProvider, createStyles, makeStyles } from '@material-ui/core/styles';

import AppProps from './AppProps';
import { CssBaseline } from '@material-ui/core';
import RecoilListener from '../RecoilListener/RecoilListener';
import RoutingContainer from '../RoutingContainer/RoutingContainer';
import { light } from '../../services/themeService';

const useStyle = makeStyles<any, any>(() =>
    createStyles({
        container: {
            width: "100%"
        }
    })
);

function Render(props: AppProps) {

    return (
        <div className={props.classes.container}>
            <RecoilListener />
            <RoutingContainer />
        </div>
    );

}

export default function App() {

    const classes = useStyle(light);


    return (
        <MuiThemeProvider theme={light} >
            <CssBaseline />
            <Render classes={classes} />
        </MuiThemeProvider>
    );
}

