import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

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
