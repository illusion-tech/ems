import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isCollapsed = false;

  logout(){
    localStorage.clear();
    location.reload();
  }
}
