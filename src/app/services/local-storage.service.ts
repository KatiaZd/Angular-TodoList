import { Injectable } from '@angular/core';
import { Task } from '../pages/add-tasks/add-tasks.component';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  deleteTask(task: Task) {
    throw new Error('Method not implemented.');
  }
  moveTaskToHistorical(task: Task) {
    throw new Error('Method not implemented.');
  }
  moveTaskToList(task: Task) {
    throw new Error('Method not implemented.');
  }
  moveToHistoricalTasks(task: Task) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  saveTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks(): string[] {
    const tasksString = localStorage.getItem('tasks');
    if (tasksString) {
      return JSON.parse(tasksString);
    }
    return [];
  }
  
}
