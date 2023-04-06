import { Component } from '@angular/core';
import { CategoriesType } from 'src/app/mocks/categories.mock';


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
