import * as React from 'react';

import { taskFilterState, tasksState } from '../../services/stateService/stateService';

import { save } from '../../services/storageService/storageService';
import { useRecoilValue } from 'recoil';

export default function RecoilListener() {

    const tasks = useRecoilValue(tasksState);
    const filter = useRecoilValue(taskFilterState);

    React.useEffect(() => {
        save({
            tasks: tasks,
            filter: filter
        })
    }, [tasks, filter]);

    return <React.Fragment />;

}