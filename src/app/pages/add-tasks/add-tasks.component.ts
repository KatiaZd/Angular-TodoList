import { Component } from '@angular/core';
import { CategoriesType } from 'src/app/mocks/categories.mock';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  categories: CategoriesType[] = ["🛍️", "💊️", "💼", "💸", "🧼", "🤷‍♀️"];
  router: any;
  selectedCategory: any;

  // Au click, background de la catégorie sélectionnée change de couleur
  onCategoryClick(category: any) {
    this.selectedCategory = category;
  }
}
