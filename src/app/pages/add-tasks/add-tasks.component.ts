import { Component } from '@angular/core';
import { CategoriesType } from 'src/app/mocks/categories.mock';
import { LocalStorageService } from 'src/app/services/local-storage.service'; 



interface Task {
  name: string;
  category: string;
  urgent: boolean;
}

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  categories: CategoriesType[] = ["🛍️", "💊️", "💼", "💸", "🧼", "🤷‍♀️"];
  task: string = '';
  router: any;

  constructor(private localStorageService: LocalStorageService) { }

  saveTask() {
    this.localStorageService.saveTask(this.task);
    this.task = '';
    this.router.navigate(['listTasks']); // naviguer vers la page list-tasks
  }



  // router: any;
  selectedCategory: string = '';
  newTask: Task = {
    name: '',
    category: '',
    urgent: false
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
    this.tasks.push(this.newTask);
    this.localStorageService.saveTask(this.newTask.name); // appel à saveTask()
    this.newTask = {
      name: '',
      category: '',
      urgent: false
    };
    taskForm.resetForm();
  }




    // Au click, background de la catégorie sélectionnée change de couleur
    // onCategoryClick(category: any) {
    //   this.selectedCategory = category;
    // }

}
