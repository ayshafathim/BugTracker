import { Component } from '@angular/core';
import { BugEntity } from '../model/BugEntity';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bugupdation',
  templateUrl: './bugupdation.component.html',
  styleUrls: ['./bugupdation.component.css']
})
export class BugupdationComponent {
  constructor(private router: Router) {}

  searchText: string = ''; // Search text for Bug Name
  searchStatus: string = ''; // Search text for Status
  searchId: number | null = null; // Search text for ID

  // navigateToAddBug(): void {
  //   this.router.navigate(['/createbug']);
  // }

  bugs: BugEntity[] = [
    {
      id: 1,
      name: 'Bug 1',
      description: 'This is bug 1 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'In Progress',
      updateStatus: '',
      createdOn: '2023-06-17T08:30:00.000Z',
      projectId:1
    },
    {
      id: 2,
      name: 'Bug 2',
      description: 'This is bug 2 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'Closed',
      updateStatus: '',
      createdOn: '2023-06-18T10:15:00.000Z',
      projectId:1
    },
    // Add more bug objects as needed
  ];

  editBug(bug: BugEntity): void {
    this.router.navigate(['/editbug', bug.id]);
  }
  

  logout() {
   
    this.router.navigate(['/landing']);
  }
  
  deleteBug(index: number) {
    this.bugs.splice(index, 1); // Remove the bug from the array based on the provided index
  }

  updateBugStatus(bug: BugEntity) {
    // Perform any necessary update logic here, such as making an API call
    console.log(`Bug ${bug.name} status updated to: ${bug.status}`);

    bug.updateStatus = bug.status; // Update the 'updateStatus' field with the new status
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  search(): void {
    this.filteredBugs = this.bugs.filter((bug: BugEntity) => {
      const searchTextLower = this.searchText.toLowerCase();
      const idMatch = bug.id.toString().includes(searchTextLower);
      const nameMatch = bug.name.toLowerCase().includes(searchTextLower);
      const statusMatch = bug.status.toLowerCase().includes(searchTextLower);
  
      return idMatch || nameMatch || statusMatch;
    });
  }
  

  filteredBugs: BugEntity[] = this.bugs; // Initialize with all bugs on component load


  getStatusClass(status: string): string {
    switch (status) {
      case 'Reopen':
      case 'Open':
        return 'reopen';
      case 'Closed':
        return 'closed';
      case 'In Progress':
        return 'in-progress';
      default:
        return '';
    }
  }
  
  getStatusLabel(status: string): string {
    switch (status) {
      case 'Reopen':
        return 'Reopen';
      case 'Open':
        return 'Open';
      case 'Closed':
        return 'Closed';
      case 'In Progress':
        return 'In Progress';
      default:
        return '';
    }
  }

  
}
