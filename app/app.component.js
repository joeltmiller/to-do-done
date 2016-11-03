"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var TASKS = [
    { desc: 'Start talk prep', done: true },
    { desc: 'Get overwhelmed with fear', done: false },
    { desc: 'Tears', done: true },
    { desc: 'Tears', done: false },
    { desc: 'Tears', done: true },
    { desc: 'Tears', done: false },
    { desc: 'Get it together', done: false },
    { desc: 'Give talk', done: false }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Task Lister 5000';
        this.tasks = TASKS;
        this.addTask = function (newTaskDesc) {
            this.tasks.push({ desc: newTaskDesc, done: false });
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'to-do',
        template: "\n  <h1>{{title}}</h1>\n  <input type=\"text\" [(ngModel)]=\"bananaSandwich\"/>\n  <button (click)=\"addTask(bananaSandwich)\">Add</button>\n  <ul>\n    <li *ngFor=\"let task of tasks\">\n      {{task.desc}} <input type=\"checkbox\" [(ngModel)]=\"task.done\"/>\n    </li>\n  </ul>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map