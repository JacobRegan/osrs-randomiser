import { Component, computed, effect, signal } from '@angular/core';
import { TaskEnum, TypeEnum } from './tasks/enums';
import { Task, tasks } from './tasks/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'osrs-randomiser';

  public constructor() {
    this.allTasks.set(tasks);

    var completedTasks = JSON.parse(localStorage.getItem("completedTasks") ?? "[]");
    var questPoints = JSON.parse(localStorage.getItem("questPoints") ?? "1");
    var currentTaskRaw = localStorage.getItem("currentTask") ?? "undefined";
    var currentTask = currentTaskRaw == "undefined" ? undefined : JSON.parse(currentTaskRaw);

    this.completedTasks.set(completedTasks);
    this.questPoints.set(questPoints);
    this.currentTask.set(currentTask);

    this.hasLoaded.set(true);

    effect(() => {
      localStorage.setItem("completedTasks", JSON.stringify(this.completedTasks()))
      localStorage.setItem("questPoints", JSON.stringify(this.questPoints()))
      localStorage.setItem("currentTask", JSON.stringify(this.currentTask()))
    });
  }

  public hasLoaded = signal<boolean>(false);
  public allTasks = signal<Task[]>([]);
  public completedTasks = signal<TaskEnum[]>([]);
  public questPoints = signal<number>(1);
  public currentTask = signal<Task | undefined>(undefined);
  public isLoading = signal(false);

  public recentlyCompletedTasks = computed(() => {
    return this.completedTasks().slice(-10).reverse();
  })

  public totalTaskCount = computed(() => {
    var taskCount = 0;
    for (let task of this.allTasks()) {
      if (task.repeatable) {
        taskCount += task.repeatable;
      }
      else {
        taskCount++
      }
    }

    return taskCount;
  });

  public availableTasks = computed<Task[]>(() => {
    return this.allTasks().filter(x => this.isTaskAvailable(x))
  });

  public availableQuestTasks = computed<Task[]>(() => {
    return this.availableTasks().filter(x => x.type == TypeEnum.quest);
  });

  public availableSkillTasks = computed<Task[]>(() => {
    return this.availableTasks().filter(x => x.type == TypeEnum.skill);
  });

  public availableDiaryTasks = computed<Task[]>(() => {
    return this.availableTasks().filter(x => x.type == TypeEnum.diary);
  });

  public availableCollectionTasks = computed<Task[]>(() => {
    return this.availableTasks().filter(x => x.type == TypeEnum.collection_log);
  });

  public availableMiscTasks = computed<Task[]>(() => {
    return this.availableTasks().filter(x => x.type == TypeEnum.misc);
  });

  public generateTask(): void {
    this.isLoading.set(true);

    var questWeighting = 50;
    var skillWeighting = 30;
    var diaryWeighting = 100;
    var collectionWeighting = 10;
    var miscWeighting = 10;

    var totalWeighting = 0;
    var types: { type: TypeEnum, weighting: number, tasks: Task[] }[] = [];

    if (this.availableQuestTasks().length > 0) {
      totalWeighting += questWeighting;
      types.push({ type: TypeEnum.quest, weighting: totalWeighting, tasks: this.availableQuestTasks() });
    }
    if (this.availableSkillTasks().length > 0) {
      totalWeighting += skillWeighting;
      types.push({ type: TypeEnum.skill, weighting: totalWeighting, tasks: this.availableSkillTasks() });
    }
    if (this.availableDiaryTasks().length > 0) {
      totalWeighting += diaryWeighting;
      types.push({ type: TypeEnum.diary, weighting: totalWeighting, tasks: this.availableDiaryTasks() });
    }
    if (this.availableCollectionTasks().length > 0) {
      totalWeighting += collectionWeighting;
      types.push({ type: TypeEnum.collection_log, weighting: totalWeighting, tasks: this.availableCollectionTasks() });
    }
    if (this.availableMiscTasks().length > 0) {
      totalWeighting += miscWeighting;
      types.push({ type: TypeEnum.misc, weighting: totalWeighting, tasks: this.availableMiscTasks() });
    }

    var categoryRoll = this.randBetween(0, totalWeighting);

    for (let item of types) {
      if (categoryRoll < item.weighting) {
        var taskRoll = this.randBetween(0, item.tasks.length - 1);

        this.currentTask.set(item.tasks[taskRoll]);

        setTimeout(() => {
          this.isLoading.set(false);
        }, 1000)
        return;
      }
    }

    this.isLoading.set(false);
  }

  public formatTask(task: string) {
    return task.replaceAll("_", " ");
  }

  public randBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public completeTask(): void {
    if (!this.currentTask()) {
      return;
    }

    var backupIteration = JSON.parse(localStorage.getItem("backupIteration") ?? "0");

    var completedTasksBackup = JSON.parse(localStorage.getItem("completedTasksBackup_" + backupIteration) ?? "[]");
    var questPointsBackup = JSON.parse(localStorage.getItem("questPointsBackup_" + backupIteration) ?? "0");

    this.completedTasks.set([...this.completedTasks(), this.currentTask()!.task]);
    completedTasksBackup.push(this.currentTask()!.task);

    if (this.currentTask()!.questPoints) {
      this.questPoints.set(this.questPoints() + this.currentTask()!.questPoints!)
      questPointsBackup += this.currentTask()!.questPoints!;
    }

    localStorage.setItem("completedTasksBackup_" + backupIteration, JSON.stringify(completedTasksBackup));
    localStorage.setItem("questPointsBackup_" + backupIteration, JSON.stringify(questPointsBackup));

    this.currentTask.set(undefined);
  }

  public cannotComplete(): void {
    if (!this.currentTask()) {
      return;
    }

    this.currentTask.set(undefined);
  }

  public isTaskAvailable(task: Task) {
    if (task.questPointRequirement && task.questPointRequirement > this.questPoints()) {
      return false;
    }

    if (task.repeatable) {
      if (this.completedTasks().filter(x => x == task.task).length >= task.repeatable) {
        return false;
      }
    }
    else {
      if (this.completedTasks().some(x => x == task.task)) {
        return false;
      }
    }

    if (!task.requirements.every(x => this.completedTasks().some(y => y == x))) {
      return false;
    }

    return true;
  }

  public gotoWiki(): void {
    if (!this.currentTask()) {
      return;
    }

    var task = this.currentTask()!.task.toString();

    if (task.indexOf("_level_") > 0) {
      task = task.split("_")[0];
    }

    task = this.formatTask(task);

    console.log(task.indexOf("_level_"));

    var url = "https://oldschool.runescape.wiki/?search=" + task + "&title=Special%3ASearch&wprov=acrw1_-1";

    window.open(url, "_blank");
  }

  public resetProgress(): void {
    if (confirm("Are you sure? This will reset all progress")) {

      var backupIteration = JSON.parse(localStorage.getItem("backupIteration") ?? "0");
      localStorage.setItem("backupIteration", JSON.stringify(backupIteration + 1));

      this.completedTasks.set([]);
      this.questPoints.set(0);
      this.currentTask.set(undefined);
    }
  }

  public exportSave(): void {
    const save = {
      completedTasks: this.completedTasks(),
      currentTask: this.currentTask(),
      questPoints: this.questPoints()
    };

    const json = JSON.stringify(save, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'OSRS Randomiser Save.json';
    a.click();

    URL.revokeObjectURL(url);
  }

  public importSave(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        let save: any;

        try {
          save = JSON.parse(reader.result as string);
        } catch {
          console.error('Invalid JSON save file');
          return;
        }

        // Validate completedTasks
        if (
          !Array.isArray(save.completedTasks) ||
          !save.completedTasks.every((x: any) => typeof x === 'string')
        ) {
          console.error('Invalid completedTasks');
          return;
        }

        // Validate currentTask (object or null)
        if (
          save.currentTask !== null &&
          (typeof save.currentTask !== 'object' || Array.isArray(save.currentTask))
        ) {
          console.error('Invalid currentTask');
          return;
        }

        // Validate questPoints
        if (typeof save.questPoints !== 'number') {
          console.error('Invalid questPoints');
          return;
        }

        // Apply save
        this.completedTasks.set(save.completedTasks);
        this.currentTask.set(save.currentTask);
        this.questPoints.set(save.questPoints);
      };

      reader.readAsText(file);
    };

    input.click();
  }

}
