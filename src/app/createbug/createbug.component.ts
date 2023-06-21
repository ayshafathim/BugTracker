import { Component, NgModule } from '@angular/core';
import { Bug } from '../bug.model';
import { Router } from '@angular/router';
import { BugService } from '../bug.service';
import { FormsModule } from '@angular/forms';
import { BugupdationComponent } from '../bugupdation/bugupdation.component';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreatebugComponent {

  newBug: Bug = {
    projectId: 0,
    bugName: '',
    description: '',
    assignedTo: '',
    assignedBy: '',
    status: '',
    updateStatus: '',
    createdDate: ''
  };

  constructor(private router: Router, private bugService: BugService) {}

  assignTask() {

    this.bugService.addBug(this.newBug);
    // console.log(this.bugService.getBugs());
    console.log('Bug assigned:', this.newBug);
    // Reset the form or navigate to another page if needed
    this.newBug = {
      projectId: 0,
      bugName: '',
      description: '',
      assignedTo: '',
      assignedBy: '',
      status: '',
      updateStatus: '',
      createdDate: ''
    };
    this.router.navigate(['/bugupdation']);
  }
}

