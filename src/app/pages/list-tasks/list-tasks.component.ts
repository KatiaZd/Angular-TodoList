import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Task } from 'src/app/task.model';



@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit  {

  tasks: Task[] = [];
  urgentTasks: Task[] = [];
  nonUrgentTasks: Task[] = [];
  
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.tasks = this.localStorageService.getTasks();
    this.urgentTasks = this.tasks.filter(task => task.urgent);
    this.nonUrgentTasks = this.tasks.filter(task => !task.urgent);
  }

  moveToHistoricalTasks(task: Task) {
    task.done = true;
    this.localStorageService.saveTask(task);
    this.tasks = this.tasks.filter(t => t !== task);
    this.sortTasks();
  }

  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.urgent && !b.urgent) {
        return -1;
      } else if (!a.urgent && b.urgent) {
        return 1;
      } else {
        return 0;
      }
    });
    this.urgentTasks = this.tasks.filter(task => task.urgent);
    this.nonUrgentTasks = this.tasks.filter(task => !task.urgent);
  }
  
  
  newTask: Task = { name: '', category: '', done: false, urgent: false };

  addTask(newTask: Task): void {
    this.localStorageService.saveTask(newTask);
    this.tasks.push(newTask);
    this.sortTasks();
    this.newTask = { name: '', category: '', done: false, urgent: false };
  }
}
