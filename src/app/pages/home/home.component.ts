import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToMissing() {
    this.router.navigate(['/missingform']);
  }

  goToFound() {
    this.router.navigate(['/foundform']);
  }

  goToAll()
  {
    this.router.navigate(['/all_posts']);
  }
  
}
