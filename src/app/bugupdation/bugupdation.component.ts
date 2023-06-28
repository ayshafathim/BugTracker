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

  searchText: string = ''; // Search text for Bug Name
  searchStatus: string = ''; // Search text for Status
  searchId: number | null = null; // Search text for ID

  // navigateToAddBug(): void {
  //   this.router.navigate(['/createbug']);
  // }

  bugs: Bug[] = [
    {
      Id: 1,
      bugName: 'Bug 1',
      description: 'This is bug 1 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'In Progress',
      updateStatus: '',
      createdDate: '2023-06-17T08:30:00.000Z'
    },
    {
      Id: 2,
      bugName: 'Bug 2',
      description: 'This is bug 2 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'Closed',
      updateStatus: '',
      createdDate: '2023-06-18T10:15:00.000Z'
    },
    // Add more bug objects as needed
  ];

  editBug(bug: Bug): void {
    this.router.navigate(['/editbug', bug.Id]);
  }
  

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

  search(): void {
    this.filteredBugs = this.bugs.filter((bug: Bug) => {
      const searchTextLower = this.searchText.toLowerCase();
      const idMatch = bug.Id.toString().includes(searchTextLower);
      const nameMatch = bug.bugName.toLowerCase().includes(searchTextLower);
      const statusMatch = bug.status.toLowerCase().includes(searchTextLower);
  
      return idMatch || nameMatch || statusMatch;
    });
  }
  

  filteredBugs: Bug[] = this.bugs; // Initialize with all bugs on component load


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
