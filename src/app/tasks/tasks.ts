import { TaskEnum, TypeEnum } from "./enums";
import { miscTasks } from "./misc-tasks";
import { questTasks } from "./quest-tasks";
import { skillTasks } from "./skill-tasks";
import { diaryTasks } from "./diary-tasks";
import { collectionLogTasks } from "./collection-log-tasks";

export interface Task {
  type: TypeEnum;
  task: TaskEnum;
  requirements: TaskEnum[];
  questPoints?: number,
  questPointRequirement?: number,
  repeatable?: number
}

export const tasks: Task[] = [...skillTasks, ...questTasks, ...miscTasks, ...diaryTasks, ...collectionLogTasks] as Task[]
