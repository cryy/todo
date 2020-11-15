import * as React from 'react';

import AppToolbar from '../AppToolbar/AppToolbar';
import Home from '../Home/Home';
import { Route } from 'react-router-dom';
import TaskView from '../TaskView/TaskView';

export default function RoutingContainer() {
  
    return (
        <React.Fragment>
            <AppToolbar />
            <Home />

            {/* Modal route */}
            <Route path={"/:id"} children={<TaskView />} />
        </React.Fragment>
    );

}