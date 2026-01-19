import { TaskEnum, TypeEnum } from "./enums";
import { Task } from "./tasks";

export const miscTasks: Task[] = [
  {
    type: TypeEnum.misc,
    task: TaskEnum.natural_history_quiz,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.misc,
    task: TaskEnum.knights_waves_training_grounds,
    requirements: [TaskEnum.kings_ransom, TaskEnum.hitpoints_level_60]
  } as Task,
  {
    type: TypeEnum.misc,
    task: TaskEnum.knights_waves_training_grounds,
    requirements: [TaskEnum.kings_ransom, TaskEnum.hitpoints_level_60]
  } as Task,
  {
    type: TypeEnum.misc,
    task: TaskEnum.acquire_fire_cape,
    requirements: [TaskEnum.prayer_level_44, TaskEnum.ranged_level_60, TaskEnum.hitpoints_level_60, TaskEnum.defence_level_60]
  } as Task,
  {
    type: TypeEnum.misc,
    task: TaskEnum.acquire_infernal_cape,
    requirements: [TaskEnum.prayer_level_92, TaskEnum.ranged_level_95, TaskEnum.hitpoints_level_95, TaskEnum.defence_level_95]
  } as Task,
  {
    type: TypeEnum.misc,
    task: TaskEnum.stronghold_of_security,
    requirements: []
  } as Task
] as Task[]
