import TaskPriority from "./TaskPriority";

export default interface Task {
    id: number;
    name: string;
    description?: string;
    done: boolean;
    priority: TaskPriority;
}