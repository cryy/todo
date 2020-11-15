import Task from "../../stateService/models/task";
import TaskFilter from "../../stateService/models/TaskFilter";

export default interface Store {
    tasks: Task[];
    filter: TaskFilter;
}