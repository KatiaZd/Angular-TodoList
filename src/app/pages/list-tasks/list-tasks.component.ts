import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Task } from '../add-tasks/add-tasks.component';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit  {

  tasks: Task[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.tasks = this.localStorageService.getTasks().map(task => ({ 
      name: task, 
      category: '',
      urgent: false,
      done: false 
    }));
  }

  ngOnInit(): void {

  }

  moveToHistoricalTasks(task: Task) {
    if (task.done) {
      this.localStorageService.moveTaskToHistorical(task);
    } else {
      this.localStorageService.moveTaskToList(task);
    }
  }

  deleteTask(task: Task) {
    this.localStorageService.deleteTask(task);
  }

}
