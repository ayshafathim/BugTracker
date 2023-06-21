import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  constructor(private router: Router) {}
}
