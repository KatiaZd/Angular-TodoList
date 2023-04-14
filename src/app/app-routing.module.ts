import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTasksComponent } from './pages/add-tasks/add-tasks.component';
import { HistoricalTasksComponent } from './pages/historical-tasks/historical-tasks.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';

  const routes: Routes = [

    { path: 'listTasks', component: ListTasksComponent },
    { path: '', component: AddTasksComponent },
    { path: 'historical', component: HistoricalTasksComponent },
    { path: '', redirectTo: 'addTask', pathMatch: 'full' }, // redirige l'utilisateur vers AddTasksComponent si l'URL est vide
    { path: '**', redirectTo: 'addTask', pathMatch: 'full' } // redirige l'utilisateur vers AddTasksComponent si l'URL est invalide
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
