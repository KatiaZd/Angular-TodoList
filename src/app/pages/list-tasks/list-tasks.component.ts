import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit  {

  tasks: string[] = [];

  constructor(private localStorageService: LocalStorageService) {}
  
  ngOnInit(): void {
    this.tasks = this.localStorageService.getTasks();
  }
}
