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
  urgentTasks: Task[] = [];
  nonUrgentTasks: Task[] = [];


  constructor(private localStorageService: LocalStorageService) {
    this.tasks = this.localStorageService.getTasks().map(name => ({ name, done: false, urgent: false, category: "" }));
    this.urgentTasks = this.tasks.filter(task => task.urgent);
    this.nonUrgentTasks = this.tasks.filter(task => !task.urgent);
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


}
