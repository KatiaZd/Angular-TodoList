import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  


  constructor(private localStorageService: LocalStorageService , private router: Router) {

    this.tasks = this.localStorageService.getTasks().map(task => new Task(task.name, task.urgent, task.category, task.done));
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
