import Task from "../../services/stateService/models/task";

export default interface TaskItemProps {
    task: Task;
    classes: Record<any, string>;
}