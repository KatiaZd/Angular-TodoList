import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { AddTasksComponent } from './pages/add-tasks/add-tasks.component';
import { HistoricalTasksComponent } from './pages/historical-tasks/historical-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListTasksComponent,
    AddTasksComponent,
    HistoricalTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
