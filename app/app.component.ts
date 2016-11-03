import { Component } from '@angular/core';

export class Task {
  desc: string;
  done: boolean;
}

const TASKS: Task[] = [
  {desc:'Start talk prep', done: true},
  {desc:'Get overwhelmed with fear', done: false},
  {desc:'Tears', done: true},
  {desc:'Tears', done: false},
  {desc:'Tears', done: true},
  {desc:'Tears', done: false},
  {desc:'Get it together', done: false},
  {desc:'Give talk', done: false}
];

@Component({
  selector: 'to-do',
  template: `
  <h1>{{title}}</h1>
  <input type="text" [(ngModel)]="bananaSandwich"/>
  <button (click)="addTask(bananaSandwich)">Add</button>
  <ul>
    <li *ngFor="let task of tasks">
      {{task.desc}} <input type="checkbox" [(ngModel)]="task.done"/>
    </li>
  </ul>
  `
})

export class AppComponent {
  title = 'Task Lister 5000';
  tasks = TASKS;
  addTask = function(newTaskDesc) {
    this.tasks.push({desc: newTaskDesc, done:false});
  }
}
