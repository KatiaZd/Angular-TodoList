import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router){}

  get listTasks(): boolean {
  return this.router.url === '/listTasks';
}
 get addTasks(): boolean{
  return this.router.url === '/';
 }

 get historicalTasks(): boolean {
  return this.router.url === '/historical';
}



}
