import { Injectable } from '@angular/core';
import { Task } from '../task.model';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private TASKS_KEY = 'tasks';
  private HISTORICAL_TASKS_KEY = 'historicalTasks';

  constructor() { }

  
  

  
  getTasks(): Task[] {
      const tasksString = localStorage.getItem('tasks');
      if (tasksString) {
        return JSON.parse(tasksString);
      } else {
        return [];
      }
    }
    
  

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
  }

  getHistoricalTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.HISTORICAL_TASKS_KEY) || '[]');
  }

  saveHistoricalTasks(historicalTasks: Task[]): void {
    localStorage.setItem(this.HISTORICAL_TASKS_KEY, JSON.stringify(historicalTasks));
  }

  deleteTask(task: Task) {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }

  moveTaskToHistorical(task: Task) {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      const historicalTasks = this.getHistoricalTasks();
      historicalTasks.push(tasks[index]);
      this.saveHistoricalTasks(historicalTasks);
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }

  moveTaskToList(task: Task) {
    const historicalTasks = this.getHistoricalTasks();
    const index = historicalTasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      const tasks = this.getTasks();
      tasks.push(historicalTasks[index]);
      this.saveTasks(tasks);
      historicalTasks.splice(index, 1);
      this.saveHistoricalTasks(historicalTasks);
    }
  }

}










  // deleteTask(task: Task) {
  //   throw new Error('Method not implemented.');
  // }


  // moveTaskToHistorical(task: Task) {
  //   throw new Error('Method not implemented.');
  // }


  
  // moveTaskToList(task: Task) {
  //   throw new Error('Method not implemented.');
  // }
  // moveToHistoricalTasks(task: Task) {
  //   throw new Error('Method not implemented.');
  // }

  // constructor() { }

  // saveTask(task: string) {
  //   const tasks = this.getTasks();
  //   tasks.push(task);
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  // getTasks(): string[] {
  //   const tasksString = localStorage.getItem('tasks');
  //   if (tasksString) {
  //     return JSON.parse(tasksString);
  //   }
  //   return [];
  // }
  
