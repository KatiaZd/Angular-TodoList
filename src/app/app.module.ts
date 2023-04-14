import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { AddTasksComponent } from './pages/add-tasks/add-tasks.component';
import { HistoricalTasksComponent } from './pages/historical-tasks/historical-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListTasksComponent,
    AddTasksComponent,
    HistoricalTasksComponent,
    CreateTaskComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
