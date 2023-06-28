import { Component, OnInit } from '@angular/core';
import { Bug } from '../model/BugEntity';
import { ActivatedRoute, Router } from '@angular/router';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-editbug',
  templateUrl: './editbug.component.html',
  styleUrls: ['./editbug.component.css']
})
export class EditbugComponent implements OnInit {
  bug: Bug = {} as Bug;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bugService: BugService
  ) {}

  // ngOnInit(): void {
  //   const bugId = this.route.snapshot.params['id'];
  //   this.getBugById(bugId);
  // }
  ngOnInit(): void {
    const bugId = this.route.snapshot.paramMap.get('id');
    if (bugId) {
      this.bugService.getBugById(bugId).subscribe((bug) => {
        this.bug = bug;
      });
    } else {
      // Handle case when bugId is not available
      console.error('Bug ID is not provided.');
      // You can display an error message or redirect the user to another page
      this.router.navigate(['/bugupdation']); // Redirect to the dashboard page, for example
    }
  }
  

  getBugById(bugId: string): void {
    this.bugService.getBugById(bugId).subscribe(
      (bug: Bug) => {
        this.bug = bug;
      },
      (error) => {
        console.log('Error retrieving bug:', error);
      }
    );
  }

  updateBug(): void {
    this.bugService.updateBug(this.bug).subscribe(
      () => {
        console.log('Bug updated successfully');
        // Redirect to the dashboard page after successful update
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('Error updating bug:', error);
      }
    );
  }
}