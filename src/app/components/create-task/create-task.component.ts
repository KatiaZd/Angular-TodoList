import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  constructor(private router: Router) { }

  // Accédez à la page d'ajout de tâche
  addTask() {
    this.router.navigate(['']);
  }


}
