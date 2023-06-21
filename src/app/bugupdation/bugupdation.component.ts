import { Component } from '@angular/core';
import { Bug } from '../bug.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bugupdation',
  templateUrl: './bugupdation.component.html',
  styleUrls: ['./bugupdation.component.css']
})
export class BugupdationComponent {
  constructor(private router: Router) {}

  navigateToAddBug(): void {
    this.router.navigate(['/createbug']);
  }

  bugs: Bug[] = [
    {
      projectId: 1,
      bugName: 'Bug 1',
      description: 'This is bug 1 description',
      assignedTo: 'John Doe',
      assignedBy: 'Jane Smith',
      status: 'In Progress',
      updateStatus: '',
      createdDate: '2023-06-17T08:30:00.000Z'
    },
    {
      projectId: 2,
      bugName: 'Bug 2',
      description: 'This is bug 2 description',
      assignedTo: 'John Doe',
      assignedBy: 'Jane Smith',
      status: 'Closed',
      updateStatus: '',
      createdDate: '2023-06-18T10:15:00.000Z'
    },
    // Add more bug objects as needed
  ];


  logout() {
   
    this.router.navigate(['/landing']);
  }
  
  deleteBug(index: number) {
    this.bugs.splice(index, 1); // Remove the bug from the array based on the provided index
  }

  updateBugStatus(bug: Bug) {
    // Perform any necessary update logic here, such as making an API call
    console.log(`Bug ${bug.bugName} status updated to: ${bug.status}`);

    bug.updateStatus = bug.status; // Update the 'updateStatus' field with the new status
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  }
}
