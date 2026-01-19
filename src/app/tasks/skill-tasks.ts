import { TaskEnum, TypeEnum } from "./enums";
import { Task } from "./tasks";

export const skillTasks: Task[] = [
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_10,
    requirements: [TaskEnum.attack_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_15,
    requirements: [TaskEnum.attack_level_10]
  } as Task,
  {
    type: TypeEnum.skill,

    task: TaskEnum.attack_level_20,
    requirements: [TaskEnum.attack_level_15]
  } as Task,
  {
    type: TypeEnum.skill,

    task: TaskEnum.attack_level_25,
    requirements: [TaskEnum.attack_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_30,
    requirements: [TaskEnum.attack_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_35,
    requirements: [TaskEnum.attack_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_40,
    requirements: [TaskEnum.attack_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_44,
    requirements: [TaskEnum.attack_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_48,
    requirements: [TaskEnum.attack_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_52,
    requirements: [TaskEnum.attack_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_56,
    requirements: [TaskEnum.attack_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_60,
    requirements: [TaskEnum.attack_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_63,
    requirements: [TaskEnum.attack_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_66,
    requirements: [TaskEnum.attack_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_69,
    requirements: [TaskEnum.attack_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_72,
    requirements: [TaskEnum.attack_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_75,
    requirements: [TaskEnum.attack_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_77,
    requirements: [TaskEnum.attack_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_79,
    requirements: [TaskEnum.attack_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_81,
    requirements: [TaskEnum.attack_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_83,
    requirements: [TaskEnum.attack_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_85,
    requirements: [TaskEnum.attack_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_86,
    requirements: [TaskEnum.attack_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_87,
    requirements: [TaskEnum.attack_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_88,
    requirements: [TaskEnum.attack_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_89,
    requirements: [TaskEnum.attack_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_90,
    requirements: [TaskEnum.attack_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_91,
    requirements: [TaskEnum.attack_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_92,
    requirements: [TaskEnum.attack_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_93,
    requirements: [TaskEnum.attack_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_94,
    requirements: [TaskEnum.attack_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_95,
    requirements: [TaskEnum.attack_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_96,
    requirements: [TaskEnum.attack_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_97,
    requirements: [TaskEnum.attack_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_98,
    requirements: [TaskEnum.attack_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.attack_level_99,
    requirements: [TaskEnum.attack_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_10,
    requirements: [TaskEnum.strength_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_15,
    requirements: [TaskEnum.strength_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_20,
    requirements: [TaskEnum.strength_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_25,
    requirements: [TaskEnum.strength_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_30,
    requirements: [TaskEnum.strength_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_35,
    requirements: [TaskEnum.strength_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_40,
    requirements: [TaskEnum.strength_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_44,
    requirements: [TaskEnum.strength_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_48,
    requirements: [TaskEnum.strength_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_52,
    requirements: [TaskEnum.strength_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_56,
    requirements: [TaskEnum.strength_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_60,
    requirements: [TaskEnum.strength_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_63,
    requirements: [TaskEnum.strength_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_66,
    requirements: [TaskEnum.strength_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_69,
    requirements: [TaskEnum.strength_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_72,
    requirements: [TaskEnum.strength_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_75,
    requirements: [TaskEnum.strength_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_77,
    requirements: [TaskEnum.strength_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_79,
    requirements: [TaskEnum.strength_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_81,
    requirements: [TaskEnum.strength_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_83,
    requirements: [TaskEnum.strength_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_85,
    requirements: [TaskEnum.strength_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_86,
    requirements: [TaskEnum.strength_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_87,
    requirements: [TaskEnum.strength_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_88,
    requirements: [TaskEnum.strength_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_89,
    requirements: [TaskEnum.strength_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_90,
    requirements: [TaskEnum.strength_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_91,
    requirements: [TaskEnum.strength_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_92,
    requirements: [TaskEnum.strength_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_93,
    requirements: [TaskEnum.strength_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_94,
    requirements: [TaskEnum.strength_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_95,
    requirements: [TaskEnum.strength_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_96,
    requirements: [TaskEnum.strength_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_97,
    requirements: [TaskEnum.strength_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_98,
    requirements: [TaskEnum.strength_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.strength_level_99,
    requirements: [TaskEnum.strength_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_10,
    requirements: [TaskEnum.defence_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_15,
    requirements: [TaskEnum.defence_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_20,
    requirements: [TaskEnum.defence_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_25,
    requirements: [TaskEnum.defence_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_30,
    requirements: [TaskEnum.defence_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_35,
    requirements: [TaskEnum.defence_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_40,
    requirements: [TaskEnum.defence_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_44,
    requirements: [TaskEnum.defence_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_48,
    requirements: [TaskEnum.defence_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_52,
    requirements: [TaskEnum.defence_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_56,
    requirements: [TaskEnum.defence_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_60,
    requirements: [TaskEnum.defence_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_63,
    requirements: [TaskEnum.defence_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_66,
    requirements: [TaskEnum.defence_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_69,
    requirements: [TaskEnum.defence_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_72,
    requirements: [TaskEnum.defence_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_75,
    requirements: [TaskEnum.defence_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_77,
    requirements: [TaskEnum.defence_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_79,
    requirements: [TaskEnum.defence_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_81,
    requirements: [TaskEnum.defence_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_83,
    requirements: [TaskEnum.defence_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_85,
    requirements: [TaskEnum.defence_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_86,
    requirements: [TaskEnum.defence_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_87,
    requirements: [TaskEnum.defence_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_88,
    requirements: [TaskEnum.defence_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_89,
    requirements: [TaskEnum.defence_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_90,
    requirements: [TaskEnum.defence_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_91,
    requirements: [TaskEnum.defence_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_92,
    requirements: [TaskEnum.defence_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_93,
    requirements: [TaskEnum.defence_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_94,
    requirements: [TaskEnum.defence_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_95,
    requirements: [TaskEnum.defence_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_96,
    requirements: [TaskEnum.defence_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_97,
    requirements: [TaskEnum.defence_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_98,
    requirements: [TaskEnum.defence_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.defence_level_99,
    requirements: [TaskEnum.defence_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_10,
    requirements: [TaskEnum.hitpoints_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_15,
    requirements: [TaskEnum.hitpoints_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_20,
    requirements: [TaskEnum.hitpoints_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_25,
    requirements: [TaskEnum.hitpoints_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_30,
    requirements: [TaskEnum.hitpoints_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_35,
    requirements: [TaskEnum.hitpoints_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_40,
    requirements: [TaskEnum.hitpoints_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_44,
    requirements: [TaskEnum.hitpoints_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_48,
    requirements: [TaskEnum.hitpoints_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_52,
    requirements: [TaskEnum.hitpoints_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_56,
    requirements: [TaskEnum.hitpoints_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_60,
    requirements: [TaskEnum.hitpoints_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_63,
    requirements: [TaskEnum.hitpoints_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_66,
    requirements: [TaskEnum.hitpoints_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_69,
    requirements: [TaskEnum.hitpoints_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_72,
    requirements: [TaskEnum.hitpoints_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_75,
    requirements: [TaskEnum.hitpoints_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_77,
    requirements: [TaskEnum.hitpoints_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_79,
    requirements: [TaskEnum.hitpoints_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_81,
    requirements: [TaskEnum.hitpoints_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_83,
    requirements: [TaskEnum.hitpoints_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_85,
    requirements: [TaskEnum.hitpoints_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_86,
    requirements: [TaskEnum.hitpoints_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_87,
    requirements: [TaskEnum.hitpoints_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_88,
    requirements: [TaskEnum.hitpoints_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_89,
    requirements: [TaskEnum.hitpoints_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_90,
    requirements: [TaskEnum.hitpoints_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_91,
    requirements: [TaskEnum.hitpoints_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_92,
    requirements: [TaskEnum.hitpoints_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_93,
    requirements: [TaskEnum.hitpoints_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_94,
    requirements: [TaskEnum.hitpoints_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_95,
    requirements: [TaskEnum.hitpoints_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_96,
    requirements: [TaskEnum.hitpoints_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_97,
    requirements: [TaskEnum.hitpoints_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_98,
    requirements: [TaskEnum.hitpoints_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hitpoints_level_99,
    requirements: [TaskEnum.hitpoints_level_98]
  },
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_10,
    requirements: [TaskEnum.ranged_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_15,
    requirements: [TaskEnum.ranged_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_20,
    requirements: [TaskEnum.ranged_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_25,
    requirements: [TaskEnum.ranged_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_30,
    requirements: [TaskEnum.ranged_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_35,
    requirements: [TaskEnum.ranged_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_40,
    requirements: [TaskEnum.ranged_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_44,
    requirements: [TaskEnum.ranged_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_48,
    requirements: [TaskEnum.ranged_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_52,
    requirements: [TaskEnum.ranged_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_56,
    requirements: [TaskEnum.ranged_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_60,
    requirements: [TaskEnum.ranged_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_63,
    requirements: [TaskEnum.ranged_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_66,
    requirements: [TaskEnum.ranged_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_69,
    requirements: [TaskEnum.ranged_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_72,
    requirements: [TaskEnum.ranged_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_75,
    requirements: [TaskEnum.ranged_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_77,
    requirements: [TaskEnum.ranged_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_79,
    requirements: [TaskEnum.ranged_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_81,
    requirements: [TaskEnum.ranged_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_83,
    requirements: [TaskEnum.ranged_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_85,
    requirements: [TaskEnum.ranged_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_86,
    requirements: [TaskEnum.ranged_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_87,
    requirements: [TaskEnum.ranged_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_88,
    requirements: [TaskEnum.ranged_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_89,
    requirements: [TaskEnum.ranged_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_90,
    requirements: [TaskEnum.ranged_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_91,
    requirements: [TaskEnum.ranged_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_92,
    requirements: [TaskEnum.ranged_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_93,
    requirements: [TaskEnum.ranged_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_94,
    requirements: [TaskEnum.ranged_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_95,
    requirements: [TaskEnum.ranged_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_96,
    requirements: [TaskEnum.ranged_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_97,
    requirements: [TaskEnum.ranged_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_98,
    requirements: [TaskEnum.ranged_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.ranged_level_99,
    requirements: [TaskEnum.ranged_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_10,
    requirements: [TaskEnum.prayer_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_15,
    requirements: [TaskEnum.prayer_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_20,
    requirements: [TaskEnum.prayer_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_25,
    requirements: [TaskEnum.prayer_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_30,
    requirements: [TaskEnum.prayer_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_35,
    requirements: [TaskEnum.prayer_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_40,
    requirements: [TaskEnum.prayer_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_44,
    requirements: [TaskEnum.prayer_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_48,
    requirements: [TaskEnum.prayer_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_52,
    requirements: [TaskEnum.prayer_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_56,
    requirements: [TaskEnum.prayer_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_60,
    requirements: [TaskEnum.prayer_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_63,
    requirements: [TaskEnum.prayer_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_66,
    requirements: [TaskEnum.prayer_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_69,
    requirements: [TaskEnum.prayer_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_72,
    requirements: [TaskEnum.prayer_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_75,
    requirements: [TaskEnum.prayer_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_77,
    requirements: [TaskEnum.prayer_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_79,
    requirements: [TaskEnum.prayer_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_81,
    requirements: [TaskEnum.prayer_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_83,
    requirements: [TaskEnum.prayer_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_85,
    requirements: [TaskEnum.prayer_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_86,
    requirements: [TaskEnum.prayer_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_87,
    requirements: [TaskEnum.prayer_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_88,
    requirements: [TaskEnum.prayer_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_89,
    requirements: [TaskEnum.prayer_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_90,
    requirements: [TaskEnum.prayer_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_91,
    requirements: [TaskEnum.prayer_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_92,
    requirements: [TaskEnum.prayer_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_93,
    requirements: [TaskEnum.prayer_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_94,
    requirements: [TaskEnum.prayer_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_95,
    requirements: [TaskEnum.prayer_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_96,
    requirements: [TaskEnum.prayer_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_97,
    requirements: [TaskEnum.prayer_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_98,
    requirements: [TaskEnum.prayer_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.prayer_level_99,
    requirements: [TaskEnum.prayer_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_10,
    requirements: [TaskEnum.magic_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_15,
    requirements: [TaskEnum.magic_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_20,
    requirements: [TaskEnum.magic_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_25,
    requirements: [TaskEnum.magic_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_30,
    requirements: [TaskEnum.magic_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_35,
    requirements: [TaskEnum.magic_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_40,
    requirements: [TaskEnum.magic_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_44,
    requirements: [TaskEnum.magic_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_48,
    requirements: [TaskEnum.magic_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_52,
    requirements: [TaskEnum.magic_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_56,
    requirements: [TaskEnum.magic_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_60,
    requirements: [TaskEnum.magic_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_63,
    requirements: [TaskEnum.magic_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_66,
    requirements: [TaskEnum.magic_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_69,
    requirements: [TaskEnum.magic_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_72,
    requirements: [TaskEnum.magic_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_75,
    requirements: [TaskEnum.magic_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_77,
    requirements: [TaskEnum.magic_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_79,
    requirements: [TaskEnum.magic_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_81,
    requirements: [TaskEnum.magic_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_83,
    requirements: [TaskEnum.magic_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_85,
    requirements: [TaskEnum.magic_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_86,
    requirements: [TaskEnum.magic_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_87,
    requirements: [TaskEnum.magic_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_88,
    requirements: [TaskEnum.magic_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_89,
    requirements: [TaskEnum.magic_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_90,
    requirements: [TaskEnum.magic_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_91,
    requirements: [TaskEnum.magic_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_92,
    requirements: [TaskEnum.magic_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_93,
    requirements: [TaskEnum.magic_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_94,
    requirements: [TaskEnum.magic_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_95,
    requirements: [TaskEnum.magic_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_96,
    requirements: [TaskEnum.magic_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_97,
    requirements: [TaskEnum.magic_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_98,
    requirements: [TaskEnum.magic_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.magic_level_99,
    requirements: [TaskEnum.magic_level_98]
  } as Task,

  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_10,
    requirements: [TaskEnum.cooking_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_15,
    requirements: [TaskEnum.cooking_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_20,
    requirements: [TaskEnum.cooking_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_25,
    requirements: [TaskEnum.cooking_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_30,
    requirements: [TaskEnum.cooking_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_35,
    requirements: [TaskEnum.cooking_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_40,
    requirements: [TaskEnum.cooking_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_44,
    requirements: [TaskEnum.cooking_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_48,
    requirements: [TaskEnum.cooking_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_52,
    requirements: [TaskEnum.cooking_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_56,
    requirements: [TaskEnum.cooking_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_60,
    requirements: [TaskEnum.cooking_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_63,
    requirements: [TaskEnum.cooking_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_66,
    requirements: [TaskEnum.cooking_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_69,
    requirements: [TaskEnum.cooking_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_72,
    requirements: [TaskEnum.cooking_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_75,
    requirements: [TaskEnum.cooking_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_77,
    requirements: [TaskEnum.cooking_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_79,
    requirements: [TaskEnum.cooking_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_81,
    requirements: [TaskEnum.cooking_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_83,
    requirements: [TaskEnum.cooking_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_85,
    requirements: [TaskEnum.cooking_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_86,
    requirements: [TaskEnum.cooking_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_87,
    requirements: [TaskEnum.cooking_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_88,
    requirements: [TaskEnum.cooking_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_89,
    requirements: [TaskEnum.cooking_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_90,
    requirements: [TaskEnum.cooking_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_91,
    requirements: [TaskEnum.cooking_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_92,
    requirements: [TaskEnum.cooking_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_93,
    requirements: [TaskEnum.cooking_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_94,
    requirements: [TaskEnum.cooking_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_95,
    requirements: [TaskEnum.cooking_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_96,
    requirements: [TaskEnum.cooking_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_97,
    requirements: [TaskEnum.cooking_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_98,
    requirements: [TaskEnum.cooking_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.cooking_level_99,
    requirements: [TaskEnum.cooking_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_10,
    requirements: [TaskEnum.woodcutting_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_15,
    requirements: [TaskEnum.woodcutting_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_20,
    requirements: [TaskEnum.woodcutting_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_25,
    requirements: [TaskEnum.woodcutting_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_30,
    requirements: [TaskEnum.woodcutting_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_35,
    requirements: [TaskEnum.woodcutting_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_40,
    requirements: [TaskEnum.woodcutting_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_44,
    requirements: [TaskEnum.woodcutting_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_48,
    requirements: [TaskEnum.woodcutting_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_52,
    requirements: [TaskEnum.woodcutting_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_56,
    requirements: [TaskEnum.woodcutting_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_60,
    requirements: [TaskEnum.woodcutting_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_63,
    requirements: [TaskEnum.woodcutting_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_66,
    requirements: [TaskEnum.woodcutting_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_69,
    requirements: [TaskEnum.woodcutting_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_72,
    requirements: [TaskEnum.woodcutting_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_75,
    requirements: [TaskEnum.woodcutting_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_77,
    requirements: [TaskEnum.woodcutting_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_79,
    requirements: [TaskEnum.woodcutting_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_81,
    requirements: [TaskEnum.woodcutting_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_83,
    requirements: [TaskEnum.woodcutting_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_85,
    requirements: [TaskEnum.woodcutting_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_86,
    requirements: [TaskEnum.woodcutting_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_87,
    requirements: [TaskEnum.woodcutting_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_88,
    requirements: [TaskEnum.woodcutting_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_89,
    requirements: [TaskEnum.woodcutting_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_90,
    requirements: [TaskEnum.woodcutting_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_91,
    requirements: [TaskEnum.woodcutting_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_92,
    requirements: [TaskEnum.woodcutting_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_93,
    requirements: [TaskEnum.woodcutting_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_94,
    requirements: [TaskEnum.woodcutting_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_95,
    requirements: [TaskEnum.woodcutting_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_96,
    requirements: [TaskEnum.woodcutting_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_97,
    requirements: [TaskEnum.woodcutting_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_98,
    requirements: [TaskEnum.woodcutting_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.woodcutting_level_99,
    requirements: [TaskEnum.woodcutting_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_10,
    requirements: [TaskEnum.fletching_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_15,
    requirements: [TaskEnum.fletching_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_20,
    requirements: [TaskEnum.fletching_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_25,
    requirements: [TaskEnum.fletching_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_30,
    requirements: [TaskEnum.fletching_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_35,
    requirements: [TaskEnum.fletching_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_40,
    requirements: [TaskEnum.fletching_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_44,
    requirements: [TaskEnum.fletching_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_48,
    requirements: [TaskEnum.fletching_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_52,
    requirements: [TaskEnum.fletching_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_56,
    requirements: [TaskEnum.fletching_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_60,
    requirements: [TaskEnum.fletching_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_63,
    requirements: [TaskEnum.fletching_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_66,
    requirements: [TaskEnum.fletching_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_69,
    requirements: [TaskEnum.fletching_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_72,
    requirements: [TaskEnum.fletching_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_75,
    requirements: [TaskEnum.fletching_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_77,
    requirements: [TaskEnum.fletching_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_79,
    requirements: [TaskEnum.fletching_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_81,
    requirements: [TaskEnum.fletching_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_83,
    requirements: [TaskEnum.fletching_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_85,
    requirements: [TaskEnum.fletching_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_86,
    requirements: [TaskEnum.fletching_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_87,
    requirements: [TaskEnum.fletching_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_88,
    requirements: [TaskEnum.fletching_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_89,
    requirements: [TaskEnum.fletching_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_90,
    requirements: [TaskEnum.fletching_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_91,
    requirements: [TaskEnum.fletching_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_92,
    requirements: [TaskEnum.fletching_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_93,
    requirements: [TaskEnum.fletching_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_94,
    requirements: [TaskEnum.fletching_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_95,
    requirements: [TaskEnum.fletching_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_96,
    requirements: [TaskEnum.fletching_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_97,
    requirements: [TaskEnum.fletching_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_98,
    requirements: [TaskEnum.fletching_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fletching_level_99,
    requirements: [TaskEnum.fletching_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_10,
    requirements: [TaskEnum.fishing_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_15,
    requirements: [TaskEnum.fishing_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_20,
    requirements: [TaskEnum.fishing_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_25,
    requirements: [TaskEnum.fishing_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_30,
    requirements: [TaskEnum.fishing_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_35,
    requirements: [TaskEnum.fishing_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_40,
    requirements: [TaskEnum.fishing_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_44,
    requirements: [TaskEnum.fishing_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_48,
    requirements: [TaskEnum.fishing_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_52,
    requirements: [TaskEnum.fishing_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_56,
    requirements: [TaskEnum.fishing_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_60,
    requirements: [TaskEnum.fishing_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_63,
    requirements: [TaskEnum.fishing_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_66,
    requirements: [TaskEnum.fishing_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_69,
    requirements: [TaskEnum.fishing_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_72,
    requirements: [TaskEnum.fishing_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_75,
    requirements: [TaskEnum.fishing_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_77,
    requirements: [TaskEnum.fishing_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_79,
    requirements: [TaskEnum.fishing_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_81,
    requirements: [TaskEnum.fishing_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_83,
    requirements: [TaskEnum.fishing_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_85,
    requirements: [TaskEnum.fishing_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_86,
    requirements: [TaskEnum.fishing_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_87,
    requirements: [TaskEnum.fishing_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_88,
    requirements: [TaskEnum.fishing_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_89,
    requirements: [TaskEnum.fishing_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_90,
    requirements: [TaskEnum.fishing_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_91,
    requirements: [TaskEnum.fishing_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_92,
    requirements: [TaskEnum.fishing_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_93,
    requirements: [TaskEnum.fishing_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_94,
    requirements: [TaskEnum.fishing_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_95,
    requirements: [TaskEnum.fishing_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_96,
    requirements: [TaskEnum.fishing_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_97,
    requirements: [TaskEnum.fishing_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_98,
    requirements: [TaskEnum.fishing_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.fishing_level_99,
    requirements: [TaskEnum.fishing_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_10,
    requirements: [TaskEnum.firemaking_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_15,
    requirements: [TaskEnum.firemaking_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_20,
    requirements: [TaskEnum.firemaking_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_25,
    requirements: [TaskEnum.firemaking_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_30,
    requirements: [TaskEnum.firemaking_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_35,
    requirements: [TaskEnum.firemaking_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_40,
    requirements: [TaskEnum.firemaking_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_44,
    requirements: [TaskEnum.firemaking_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_48,
    requirements: [TaskEnum.firemaking_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_52,
    requirements: [TaskEnum.firemaking_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_56,
    requirements: [TaskEnum.firemaking_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_60,
    requirements: [TaskEnum.firemaking_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_63,
    requirements: [TaskEnum.firemaking_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_66,
    requirements: [TaskEnum.firemaking_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_69,
    requirements: [TaskEnum.firemaking_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_72,
    requirements: [TaskEnum.firemaking_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_75,
    requirements: [TaskEnum.firemaking_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_77,
    requirements: [TaskEnum.firemaking_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_79,
    requirements: [TaskEnum.firemaking_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_81,
    requirements: [TaskEnum.firemaking_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_83,
    requirements: [TaskEnum.firemaking_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_85,
    requirements: [TaskEnum.firemaking_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_86,
    requirements: [TaskEnum.firemaking_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_87,
    requirements: [TaskEnum.firemaking_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_88,
    requirements: [TaskEnum.firemaking_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_89,
    requirements: [TaskEnum.firemaking_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_90,
    requirements: [TaskEnum.firemaking_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_91,
    requirements: [TaskEnum.firemaking_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_92,
    requirements: [TaskEnum.firemaking_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_93,
    requirements: [TaskEnum.firemaking_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_94,
    requirements: [TaskEnum.firemaking_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_95,
    requirements: [TaskEnum.firemaking_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_96,
    requirements: [TaskEnum.firemaking_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_97,
    requirements: [TaskEnum.firemaking_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_98,
    requirements: [TaskEnum.firemaking_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.firemaking_level_99,
    requirements: [TaskEnum.firemaking_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_10,
    requirements: [TaskEnum.crafting_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_15,
    requirements: [TaskEnum.crafting_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_20,
    requirements: [TaskEnum.crafting_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_25,
    requirements: [TaskEnum.crafting_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_30,
    requirements: [TaskEnum.crafting_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_35,
    requirements: [TaskEnum.crafting_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_40,
    requirements: [TaskEnum.crafting_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_44,
    requirements: [TaskEnum.crafting_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_48,
    requirements: [TaskEnum.crafting_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_52,
    requirements: [TaskEnum.crafting_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_56,
    requirements: [TaskEnum.crafting_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_60,
    requirements: [TaskEnum.crafting_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_63,
    requirements: [TaskEnum.crafting_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_66,
    requirements: [TaskEnum.crafting_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_69,
    requirements: [TaskEnum.crafting_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_72,
    requirements: [TaskEnum.crafting_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_75,
    requirements: [TaskEnum.crafting_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_77,
    requirements: [TaskEnum.crafting_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_79,
    requirements: [TaskEnum.crafting_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_81,
    requirements: [TaskEnum.crafting_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_83,
    requirements: [TaskEnum.crafting_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_85,
    requirements: [TaskEnum.crafting_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_86,
    requirements: [TaskEnum.crafting_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_87,
    requirements: [TaskEnum.crafting_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_88,
    requirements: [TaskEnum.crafting_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_89,
    requirements: [TaskEnum.crafting_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_90,
    requirements: [TaskEnum.crafting_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_91,
    requirements: [TaskEnum.crafting_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_92,
    requirements: [TaskEnum.crafting_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_93,
    requirements: [TaskEnum.crafting_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_94,
    requirements: [TaskEnum.crafting_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_95,
    requirements: [TaskEnum.crafting_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_96,
    requirements: [TaskEnum.crafting_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_97,
    requirements: [TaskEnum.crafting_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_98,
    requirements: [TaskEnum.crafting_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.crafting_level_99,
    requirements: [TaskEnum.crafting_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_10,
    requirements: [TaskEnum.smithing_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_15,
    requirements: [TaskEnum.smithing_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_20,
    requirements: [TaskEnum.smithing_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_25,
    requirements: [TaskEnum.smithing_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_30,
    requirements: [TaskEnum.smithing_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_35,
    requirements: [TaskEnum.smithing_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_40,
    requirements: [TaskEnum.smithing_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_44,
    requirements: [TaskEnum.smithing_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_48,
    requirements: [TaskEnum.smithing_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_52,
    requirements: [TaskEnum.smithing_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_56,
    requirements: [TaskEnum.smithing_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_60,
    requirements: [TaskEnum.smithing_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_63,
    requirements: [TaskEnum.smithing_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_66,
    requirements: [TaskEnum.smithing_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_69,
    requirements: [TaskEnum.smithing_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_72,
    requirements: [TaskEnum.smithing_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_75,
    requirements: [TaskEnum.smithing_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_77,
    requirements: [TaskEnum.smithing_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_79,
    requirements: [TaskEnum.smithing_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_81,
    requirements: [TaskEnum.smithing_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_83,
    requirements: [TaskEnum.smithing_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_85,
    requirements: [TaskEnum.smithing_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_86,
    requirements: [TaskEnum.smithing_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_87,
    requirements: [TaskEnum.smithing_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_88,
    requirements: [TaskEnum.smithing_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_89,
    requirements: [TaskEnum.smithing_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_90,
    requirements: [TaskEnum.smithing_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_91,
    requirements: [TaskEnum.smithing_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_92,
    requirements: [TaskEnum.smithing_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_93,
    requirements: [TaskEnum.smithing_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_94,
    requirements: [TaskEnum.smithing_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_95,
    requirements: [TaskEnum.smithing_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_96,
    requirements: [TaskEnum.smithing_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_97,
    requirements: [TaskEnum.smithing_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_98,
    requirements: [TaskEnum.smithing_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.smithing_level_99,
    requirements: [TaskEnum.smithing_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_10,
    requirements: [TaskEnum.mining_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_15,
    requirements: [TaskEnum.mining_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_20,
    requirements: [TaskEnum.mining_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_25,
    requirements: [TaskEnum.mining_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_30,
    requirements: [TaskEnum.mining_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_35,
    requirements: [TaskEnum.mining_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_40,
    requirements: [TaskEnum.mining_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_44,
    requirements: [TaskEnum.mining_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_48,
    requirements: [TaskEnum.mining_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_52,
    requirements: [TaskEnum.mining_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_56,
    requirements: [TaskEnum.mining_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_60,
    requirements: [TaskEnum.mining_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_63,
    requirements: [TaskEnum.mining_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_66,
    requirements: [TaskEnum.mining_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_69,
    requirements: [TaskEnum.mining_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_72,
    requirements: [TaskEnum.mining_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_75,
    requirements: [TaskEnum.mining_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_77,
    requirements: [TaskEnum.mining_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_79,
    requirements: [TaskEnum.mining_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_81,
    requirements: [TaskEnum.mining_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_83,
    requirements: [TaskEnum.mining_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_85,
    requirements: [TaskEnum.mining_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_86,
    requirements: [TaskEnum.mining_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_87,
    requirements: [TaskEnum.mining_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_88,
    requirements: [TaskEnum.mining_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_89,
    requirements: [TaskEnum.mining_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_90,
    requirements: [TaskEnum.mining_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_91,
    requirements: [TaskEnum.mining_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_92,
    requirements: [TaskEnum.mining_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_93,
    requirements: [TaskEnum.mining_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_94,
    requirements: [TaskEnum.mining_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_95,
    requirements: [TaskEnum.mining_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_96,
    requirements: [TaskEnum.mining_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_97,
    requirements: [TaskEnum.mining_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_98,
    requirements: [TaskEnum.mining_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.mining_level_99,
    requirements: [TaskEnum.mining_level_98]
  } as Task,

  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_5,
    requirements: [TaskEnum.druidic_ritual, TaskEnum.hitpoints_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_10,
    requirements: [TaskEnum.herblore_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_15,
    requirements: [TaskEnum.herblore_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_20,
    requirements: [TaskEnum.herblore_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_25,
    requirements: [TaskEnum.herblore_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_30,
    requirements: [TaskEnum.herblore_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_35,
    requirements: [TaskEnum.herblore_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_40,
    requirements: [TaskEnum.herblore_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_44,
    requirements: [TaskEnum.herblore_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_48,
    requirements: [TaskEnum.herblore_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_52,
    requirements: [TaskEnum.herblore_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_56,
    requirements: [TaskEnum.herblore_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_60,
    requirements: [TaskEnum.herblore_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_63,
    requirements: [TaskEnum.herblore_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_66,
    requirements: [TaskEnum.herblore_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_69,
    requirements: [TaskEnum.herblore_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_72,
    requirements: [TaskEnum.herblore_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_75,
    requirements: [TaskEnum.herblore_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_77,
    requirements: [TaskEnum.herblore_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_79,
    requirements: [TaskEnum.herblore_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_81,
    requirements: [TaskEnum.herblore_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_83,
    requirements: [TaskEnum.herblore_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_85,
    requirements: [TaskEnum.herblore_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_86,
    requirements: [TaskEnum.herblore_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_87,
    requirements: [TaskEnum.herblore_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_88,
    requirements: [TaskEnum.herblore_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_89,
    requirements: [TaskEnum.herblore_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_90,
    requirements: [TaskEnum.herblore_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_91,
    requirements: [TaskEnum.herblore_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_92,
    requirements: [TaskEnum.herblore_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_93,
    requirements: [TaskEnum.herblore_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_94,
    requirements: [TaskEnum.herblore_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_95,
    requirements: [TaskEnum.herblore_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_96,
    requirements: [TaskEnum.herblore_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_97,
    requirements: [TaskEnum.herblore_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_98,
    requirements: [TaskEnum.herblore_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.herblore_level_99,
    requirements: [TaskEnum.herblore_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_10,
    requirements: [TaskEnum.agility_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_15,
    requirements: [TaskEnum.agility_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_20,
    requirements: [TaskEnum.agility_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_25,
    requirements: [TaskEnum.agility_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_30,
    requirements: [TaskEnum.agility_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_35,
    requirements: [TaskEnum.agility_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_40,
    requirements: [TaskEnum.agility_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_44,
    requirements: [TaskEnum.agility_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_48,
    requirements: [TaskEnum.agility_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_52,
    requirements: [TaskEnum.agility_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_56,
    requirements: [TaskEnum.agility_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_60,
    requirements: [TaskEnum.agility_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_63,
    requirements: [TaskEnum.agility_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_66,
    requirements: [TaskEnum.agility_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_69,
    requirements: [TaskEnum.agility_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_72,
    requirements: [TaskEnum.agility_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_75,
    requirements: [TaskEnum.agility_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_77,
    requirements: [TaskEnum.agility_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_79,
    requirements: [TaskEnum.agility_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_81,
    requirements: [TaskEnum.agility_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_83,
    requirements: [TaskEnum.agility_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_85,
    requirements: [TaskEnum.agility_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_86,
    requirements: [TaskEnum.agility_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_87,
    requirements: [TaskEnum.agility_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_88,
    requirements: [TaskEnum.agility_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_89,
    requirements: [TaskEnum.agility_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_90,
    requirements: [TaskEnum.agility_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_91,
    requirements: [TaskEnum.agility_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_92,
    requirements: [TaskEnum.agility_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_93,
    requirements: [TaskEnum.agility_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_94,
    requirements: [TaskEnum.agility_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_95,
    requirements: [TaskEnum.agility_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_96,
    requirements: [TaskEnum.agility_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_97,
    requirements: [TaskEnum.agility_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_98,
    requirements: [TaskEnum.agility_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.agility_level_99,
    requirements: [TaskEnum.agility_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_10,
    requirements: [TaskEnum.thieving_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_15,
    requirements: [TaskEnum.thieving_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_20,
    requirements: [TaskEnum.thieving_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_25,
    requirements: [TaskEnum.thieving_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_30,
    requirements: [TaskEnum.thieving_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_35,
    requirements: [TaskEnum.thieving_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_40,
    requirements: [TaskEnum.thieving_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_44,
    requirements: [TaskEnum.thieving_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_48,
    requirements: [TaskEnum.thieving_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_52,
    requirements: [TaskEnum.thieving_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_56,
    requirements: [TaskEnum.thieving_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_60,
    requirements: [TaskEnum.thieving_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_63,
    requirements: [TaskEnum.thieving_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_66,
    requirements: [TaskEnum.thieving_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_69,
    requirements: [TaskEnum.thieving_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_72,
    requirements: [TaskEnum.thieving_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_75,
    requirements: [TaskEnum.thieving_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_77,
    requirements: [TaskEnum.thieving_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_79,
    requirements: [TaskEnum.thieving_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_81,
    requirements: [TaskEnum.thieving_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_83,
    requirements: [TaskEnum.thieving_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_85,
    requirements: [TaskEnum.thieving_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_86,
    requirements: [TaskEnum.thieving_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_87,
    requirements: [TaskEnum.thieving_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_88,
    requirements: [TaskEnum.thieving_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_89,
    requirements: [TaskEnum.thieving_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_90,
    requirements: [TaskEnum.thieving_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_91,
    requirements: [TaskEnum.thieving_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_92,
    requirements: [TaskEnum.thieving_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_93,
    requirements: [TaskEnum.thieving_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_94,
    requirements: [TaskEnum.thieving_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_95,
    requirements: [TaskEnum.thieving_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_96,
    requirements: [TaskEnum.thieving_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_97,
    requirements: [TaskEnum.thieving_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_98,
    requirements: [TaskEnum.thieving_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.thieving_level_99,
    requirements: [TaskEnum.thieving_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_10,
    requirements: [TaskEnum.slayer_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_15,
    requirements: [TaskEnum.slayer_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_20,
    requirements: [TaskEnum.slayer_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_25,
    requirements: [TaskEnum.slayer_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_30,
    requirements: [TaskEnum.slayer_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_35,
    requirements: [TaskEnum.slayer_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_40,
    requirements: [TaskEnum.slayer_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_44,
    requirements: [TaskEnum.slayer_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_48,
    requirements: [TaskEnum.slayer_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_52,
    requirements: [TaskEnum.slayer_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_56,
    requirements: [TaskEnum.slayer_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_60,
    requirements: [TaskEnum.slayer_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_63,
    requirements: [TaskEnum.slayer_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_66,
    requirements: [TaskEnum.slayer_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_69,
    requirements: [TaskEnum.slayer_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_72,
    requirements: [TaskEnum.slayer_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_75,
    requirements: [TaskEnum.slayer_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_77,
    requirements: [TaskEnum.slayer_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_79,
    requirements: [TaskEnum.slayer_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_81,
    requirements: [TaskEnum.slayer_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_83,
    requirements: [TaskEnum.slayer_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_85,
    requirements: [TaskEnum.slayer_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_86,
    requirements: [TaskEnum.slayer_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_87,
    requirements: [TaskEnum.slayer_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_88,
    requirements: [TaskEnum.slayer_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_89,
    requirements: [TaskEnum.slayer_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_90,
    requirements: [TaskEnum.slayer_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_91,
    requirements: [TaskEnum.slayer_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_92,
    requirements: [TaskEnum.slayer_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_93,
    requirements: [TaskEnum.slayer_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_94,
    requirements: [TaskEnum.slayer_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_95,
    requirements: [TaskEnum.slayer_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_96,
    requirements: [TaskEnum.slayer_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_97,
    requirements: [TaskEnum.slayer_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_98,
    requirements: [TaskEnum.slayer_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.slayer_level_99,
    requirements: [TaskEnum.slayer_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_10,
    requirements: [TaskEnum.farming_level_5, TaskEnum.hitpoints_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_15,
    requirements: [TaskEnum.farming_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_20,
    requirements: [TaskEnum.farming_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_25,
    requirements: [TaskEnum.farming_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_30,
    requirements: [TaskEnum.farming_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_35,
    requirements: [TaskEnum.farming_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_40,
    requirements: [TaskEnum.farming_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_44,
    requirements: [TaskEnum.farming_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_48,
    requirements: [TaskEnum.farming_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_52,
    requirements: [TaskEnum.farming_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_56,
    requirements: [TaskEnum.farming_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_60,
    requirements: [TaskEnum.farming_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_63,
    requirements: [TaskEnum.farming_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_66,
    requirements: [TaskEnum.farming_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_69,
    requirements: [TaskEnum.farming_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_72,
    requirements: [TaskEnum.farming_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_75,
    requirements: [TaskEnum.farming_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_77,
    requirements: [TaskEnum.farming_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_79,
    requirements: [TaskEnum.farming_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_81,
    requirements: [TaskEnum.farming_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_83,
    requirements: [TaskEnum.farming_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_85,
    requirements: [TaskEnum.farming_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_86,
    requirements: [TaskEnum.farming_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_87,
    requirements: [TaskEnum.farming_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_88,
    requirements: [TaskEnum.farming_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_89,
    requirements: [TaskEnum.farming_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_90,
    requirements: [TaskEnum.farming_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_91,
    requirements: [TaskEnum.farming_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_92,
    requirements: [TaskEnum.farming_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_93,
    requirements: [TaskEnum.farming_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_94,
    requirements: [TaskEnum.farming_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_95,
    requirements: [TaskEnum.farming_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_96,
    requirements: [TaskEnum.farming_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_97,
    requirements: [TaskEnum.farming_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_98,
    requirements: [TaskEnum.farming_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.farming_level_99,
    requirements: [TaskEnum.farming_level_98]
  } as Task,

  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_5,
    requirements: [TaskEnum.rune_mysteries]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_10,
    requirements: [TaskEnum.runecraft_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_15,
    requirements: [TaskEnum.runecraft_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_20,
    requirements: [TaskEnum.runecraft_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_25,
    requirements: [TaskEnum.runecraft_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_30,
    requirements: [TaskEnum.runecraft_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_35,
    requirements: [TaskEnum.runecraft_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_40,
    requirements: [TaskEnum.runecraft_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_44,
    requirements: [TaskEnum.runecraft_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_48,
    requirements: [TaskEnum.runecraft_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_52,
    requirements: [TaskEnum.runecraft_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_56,
    requirements: [TaskEnum.runecraft_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_60,
    requirements: [TaskEnum.runecraft_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_63,
    requirements: [TaskEnum.runecraft_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_66,
    requirements: [TaskEnum.runecraft_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_69,
    requirements: [TaskEnum.runecraft_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_72,
    requirements: [TaskEnum.runecraft_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_75,
    requirements: [TaskEnum.runecraft_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_77,
    requirements: [TaskEnum.runecraft_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_79,
    requirements: [TaskEnum.runecraft_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_81,
    requirements: [TaskEnum.runecraft_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_83,
    requirements: [TaskEnum.runecraft_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_85,
    requirements: [TaskEnum.runecraft_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_86,
    requirements: [TaskEnum.runecraft_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_87,
    requirements: [TaskEnum.runecraft_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_88,
    requirements: [TaskEnum.runecraft_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_89,
    requirements: [TaskEnum.runecraft_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_90,
    requirements: [TaskEnum.runecraft_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_91,
    requirements: [TaskEnum.runecraft_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_92,
    requirements: [TaskEnum.runecraft_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_93,
    requirements: [TaskEnum.runecraft_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_94,
    requirements: [TaskEnum.runecraft_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_95,
    requirements: [TaskEnum.runecraft_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_96,
    requirements: [TaskEnum.runecraft_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_97,
    requirements: [TaskEnum.runecraft_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_98,
    requirements: [TaskEnum.runecraft_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.runecraft_level_99,
    requirements: [TaskEnum.runecraft_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_5,
    requirements: [],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_10,
    requirements: [TaskEnum.hunter_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_15,
    requirements: [TaskEnum.hunter_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_20,
    requirements: [TaskEnum.hunter_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_25,
    requirements: [TaskEnum.hunter_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_30,
    requirements: [TaskEnum.hunter_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_35,
    requirements: [TaskEnum.hunter_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_40,
    requirements: [TaskEnum.hunter_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_44,
    requirements: [TaskEnum.hunter_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_48,
    requirements: [TaskEnum.hunter_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_52,
    requirements: [TaskEnum.hunter_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_56,
    requirements: [TaskEnum.hunter_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_60,
    requirements: [TaskEnum.hunter_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_63,
    requirements: [TaskEnum.hunter_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_66,
    requirements: [TaskEnum.hunter_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_69,
    requirements: [TaskEnum.hunter_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_72,
    requirements: [TaskEnum.hunter_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_75,
    requirements: [TaskEnum.hunter_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_77,
    requirements: [TaskEnum.hunter_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_79,
    requirements: [TaskEnum.hunter_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_81,
    requirements: [TaskEnum.hunter_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_83,
    requirements: [TaskEnum.hunter_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_85,
    requirements: [TaskEnum.hunter_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_86,
    requirements: [TaskEnum.hunter_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_87,
    requirements: [TaskEnum.hunter_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_88,
    requirements: [TaskEnum.hunter_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_89,
    requirements: [TaskEnum.hunter_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_90,
    requirements: [TaskEnum.hunter_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_91,
    requirements: [TaskEnum.hunter_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_92,
    requirements: [TaskEnum.hunter_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_93,
    requirements: [TaskEnum.hunter_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_94,
    requirements: [TaskEnum.hunter_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_95,
    requirements: [TaskEnum.hunter_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_96,
    requirements: [TaskEnum.hunter_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_97,
    requirements: [TaskEnum.hunter_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_98,
    requirements: [TaskEnum.hunter_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.hunter_level_99,
    requirements: [TaskEnum.hunter_level_98]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_5,
    requirements: [TaskEnum.daddys_home],
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_10,
    requirements: [TaskEnum.construction_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_15,
    requirements: [TaskEnum.construction_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_20,
    requirements: [TaskEnum.construction_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_25,
    requirements: [TaskEnum.construction_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_30,
    requirements: [TaskEnum.construction_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_35,
    requirements: [TaskEnum.construction_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_40,
    requirements: [TaskEnum.construction_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_44,
    requirements: [TaskEnum.construction_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_48,
    requirements: [TaskEnum.construction_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_52,
    requirements: [TaskEnum.construction_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_56,
    requirements: [TaskEnum.construction_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_60,
    requirements: [TaskEnum.construction_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_63,
    requirements: [TaskEnum.construction_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_66,
    requirements: [TaskEnum.construction_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_69,
    requirements: [TaskEnum.construction_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_72,
    requirements: [TaskEnum.construction_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_75,
    requirements: [TaskEnum.construction_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_77,
    requirements: [TaskEnum.construction_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_79,
    requirements: [TaskEnum.construction_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_81,
    requirements: [TaskEnum.construction_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_83,
    requirements: [TaskEnum.construction_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_85,
    requirements: [TaskEnum.construction_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_86,
    requirements: [TaskEnum.construction_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_87,
    requirements: [TaskEnum.construction_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_88,
    requirements: [TaskEnum.construction_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_89,
    requirements: [TaskEnum.construction_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_90,
    requirements: [TaskEnum.construction_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_91,
    requirements: [TaskEnum.construction_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_92,
    requirements: [TaskEnum.construction_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_93,
    requirements: [TaskEnum.construction_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_94,
    requirements: [TaskEnum.construction_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_95,
    requirements: [TaskEnum.construction_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_96,
    requirements: [TaskEnum.construction_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_97,
    requirements: [TaskEnum.construction_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_98,
    requirements: [TaskEnum.construction_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.construction_level_99,
    requirements: [TaskEnum.construction_level_98]
  } as Task,

  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_5,
    requirements: [TaskEnum.pandemonium]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_10,
    requirements: [TaskEnum.sailing_level_5]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_15,
    requirements: [TaskEnum.sailing_level_10]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_20,
    requirements: [TaskEnum.sailing_level_15]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_25,
    requirements: [TaskEnum.sailing_level_20]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_30,
    requirements: [TaskEnum.sailing_level_25]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_35,
    requirements: [TaskEnum.sailing_level_30]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_40,
    requirements: [TaskEnum.sailing_level_35]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_44,
    requirements: [TaskEnum.sailing_level_40]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_48,
    requirements: [TaskEnum.sailing_level_44]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_52,
    requirements: [TaskEnum.sailing_level_48]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_56,
    requirements: [TaskEnum.sailing_level_52]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_60,
    requirements: [TaskEnum.sailing_level_56]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_63,
    requirements: [TaskEnum.sailing_level_60]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_66,
    requirements: [TaskEnum.sailing_level_63]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_69,
    requirements: [TaskEnum.sailing_level_66]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_72,
    requirements: [TaskEnum.sailing_level_69]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_75,
    requirements: [TaskEnum.sailing_level_72]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_77,
    requirements: [TaskEnum.sailing_level_75]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_79,
    requirements: [TaskEnum.sailing_level_77]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_81,
    requirements: [TaskEnum.sailing_level_79]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_83,
    requirements: [TaskEnum.sailing_level_81]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_85,
    requirements: [TaskEnum.sailing_level_83]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_86,
    requirements: [TaskEnum.sailing_level_85]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_87,
    requirements: [TaskEnum.sailing_level_86]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_88,
    requirements: [TaskEnum.sailing_level_87]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_89,
    requirements: [TaskEnum.sailing_level_88]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_90,
    requirements: [TaskEnum.sailing_level_89]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_91,
    requirements: [TaskEnum.sailing_level_90]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_92,
    requirements: [TaskEnum.sailing_level_91]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_93,
    requirements: [TaskEnum.sailing_level_92]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_94,
    requirements: [TaskEnum.sailing_level_93]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_95,
    requirements: [TaskEnum.sailing_level_94]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_96,
    requirements: [TaskEnum.sailing_level_95]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_97,
    requirements: [TaskEnum.sailing_level_96]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_98,
    requirements: [TaskEnum.sailing_level_97]
  } as Task,
  {
    type: TypeEnum.skill,
    task: TaskEnum.sailing_level_99,
    requirements: [TaskEnum.sailing_level_98]
  }
] as Task[]
