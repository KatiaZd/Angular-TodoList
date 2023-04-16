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
    
    saveUrgentTasks(tasks: Task[]) {
      const urgentTasks = JSON.parse(localStorage.getItem('urgentTasks') || '[]');
      const newUrgentTasks = urgentTasks.concat(tasks.filter(task => task.urgent));
      localStorage.setItem('urgentTasks', JSON.stringify(newUrgentTasks));
    }
    
    
    

    saveTask(task: Task): void {
      let tasks: Task[] = [];
    
      // Récupération des tâches déjà enregistrées dans le local storage
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
      }
    
      // Ajout de la nouvelle tâche à la liste appropriée (urgent ou non-urgent)
      if (task.urgent) {
        let urgentTasks: Task[] = [];
        const storedUrgentTasks = localStorage.getItem('urgentTasks');
        if (storedUrgentTasks) {
          urgentTasks = JSON.parse(storedUrgentTasks);
        }
        urgentTasks.push(task);
        localStorage.setItem('urgentTasks', JSON.stringify(urgentTasks));
      } else {
        let nonUrgentTasks: Task[] = [];
        const storedNonUrgentTasks = localStorage.getItem('nonUrgentTasks');
        if (storedNonUrgentTasks) {
          nonUrgentTasks = JSON.parse(storedNonUrgentTasks);
        }
        nonUrgentTasks.push(task);
        localStorage.setItem('nonUrgentTasks', JSON.stringify(nonUrgentTasks));
      }
    
      // Enregistrement de la liste complète de tâches dans le local storage
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
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
      this.saveTask(task);
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
      this.saveTask(task);
    }
  }

  moveTaskToList(task: Task) {
    const historicalTasks = this.getHistoricalTasks();
    const index = historicalTasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      const tasks = this.getTasks();
      tasks.push(historicalTasks[index]);
      this.saveTask(task);
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
  
