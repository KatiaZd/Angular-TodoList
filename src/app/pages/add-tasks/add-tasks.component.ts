import { Component } from '@angular/core';
import { CategoriesType } from 'src/app/mocks/categories.mock';
import { LocalStorageService } from 'src/app/services/local-storage.service'; 

export interface Task {
  name: string;
  category: string;
  urgent: boolean;
  done: boolean; 
}

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  categories: CategoriesType[] = ["🛍️", "💊️", "💼", "💸", "🧼", "🤷‍♀️"];
  task: Task = { name: '', category: '', urgent: false, done: false };
  router: any;

  constructor(private localStorageService: LocalStorageService) { }

  saveTask() {
    this.localStorageService.saveTask(this.task.name);
    this.task = { 
      name: '', 
      category: '', 
      urgent: false, 
      done: false };
    this.router.navigate(['listTasks']);
  }

  selectedCategory: string = '';
  newTask: Task = {
    name: '',
    category: '',
    urgent: false,
    done: false
  };
  tasks: Task[] = [];

  onCategoryClick(category: string) {
    this.selectedCategory = category;
    this.newTask.category = category;
  }
  
  addTask(taskForm: any) {
    if (taskForm.invalid) {
      return;
    }

    if (this.newTask.urgent) {
      this.tasks.unshift(this.newTask);
    } else {
      this.tasks.push(this.newTask);
    }

    this.localStorageService.saveTask(this.newTask.name);
    this.newTask = {
      name: '',
      category: '',
      urgent: false,
      done: false
    };
    taskForm.resetForm();
  }

}

