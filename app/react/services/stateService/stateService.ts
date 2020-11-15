import { RecoilState, RecoilValueReadOnly, atom, selector } from "recoil";

import Task from "./models/task";
import TaskFilter from "./models/TaskFilter";
import TaskStats from "./models/TaskStats";
import { load } from "../storageService/storageService";

export const tasksState: RecoilState<Task[]> = atom({
    key: "tasksState",
    default: load().tasks
});

export const taskFilterState: RecoilState<TaskFilter> = atom({
    key: 'taskFilterState',
    default: TaskFilter.All
});

export const filteredTasksState: RecoilValueReadOnly<Task[]> = selector({
    key: 'filteredTasksState',
    get: ({ get }) => {
        const tasks = get(tasksState);
        const filter = get(taskFilterState);

        switch (filter) {
            case TaskFilter.Completed:
                return tasks.filter((t) => t.done);
            case TaskFilter.Uncompleted:
                return tasks.filter((t) => !t.done);
            default:
                return tasks;
        }
    },
});

export const taskStatsState: RecoilValueReadOnly<TaskStats> = selector({
    key: 'taskStatsState',
    get: ({ get }) => {
        const tasks = get(tasksState);
        const total = tasks.length;
        const completed = tasks.filter(x => x.done).length;

        return {
            total: total,
            completed: completed,
            uncompleted: total - completed
        };
    },
});
