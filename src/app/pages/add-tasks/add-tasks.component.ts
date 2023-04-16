import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesType } from 'src/app/mocks/categories.mock';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
})
export class AddTasksComponent {
  categories: CategoriesType[] = ['🛍️', '💊️', '💼', '💸', '🧼', '🤷‍♀️'];
  task: Task = new Task('', false, '', false);

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  saveTask() {
    const newTask: Task = new Task(
      this.task.name,
      this.task.urgent,
      this.task.category,
      this.task.done
    );

    this.localStorageService.saveTasks([newTask]);
    this.task = new Task('', false, '', false);
    this.router.navigate(['listTasks']);
  }

  selectedCategory: string = '';
  newTask: Task = new Task('', false, '', false);
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

    this.localStorageService.saveTasks([this.newTask]);
    this.newTask = new Task('', false, '', false);
    taskForm.resetForm();
  }
}


