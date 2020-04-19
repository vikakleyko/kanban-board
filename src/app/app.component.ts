import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Kanban Board';
  tasks: Task[];
  backlogTasks: Task[];
  toDoTasks: Task[];
  ongoingTasks: Task[];
  doneTasks: Task[];
  showInput: boolean;
  activeStage: String;
  selectedTask: Task;
  newTask: String;

  ngOnInit(): void {
    this.tasks = [
      {name: "Task 1", stage: "Backlog"},
      {name: "Task 2", stage: "Backlog"},
      {name: "Task 3", stage: "To Do"},
      {name: "Task 4", stage: "Ongoing"},
    ];
    this.generateStages();
  }

  generateStages() {
    this.backlogTasks = this.tasks.filter(t => t.stage === "Backlog");
    this.toDoTasks = this.tasks.filter(t => t.stage === "To Do");
    this.ongoingTasks = this.tasks.filter(t => t.stage === "Ongoing");
    this.doneTasks = this.tasks.filter(t => t.stage === "Done");
  }

  addTask(stage: String) {
    this.showInput = true;
    this.activeStage = stage;
  }

  confirmAdd() {
    this.showInput = false;
    this.tasks.push({ name: this.newTask, stage: this.activeStage});
    console.log(this.tasks);
    this.generateStages();
    this.newTask = '';
    this.activeStage = '';
  }

  selectTask(task: Task) {
    console.log(task);
    this.selectedTask = task;
  }

  removeTask() {
    this.tasks = this.tasks.filter( t => this.selectedTask.name !== t.name);
    this.generateStages();
  }

  changeStage(stage: String) {
    this.selectedTask.stage = stage;
    this.generateStages();
  }
}


interface Task {
  name: String;
  stage: String;
}
