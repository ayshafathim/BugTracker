import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BugEntity } from '../model/BugEntity';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
// export class BComponent {
//   constructor(private router: Router) {}

//   searchText: string = ''; // Search text for Bug Name
//   searchStatus: string = ''; // Search text for Status
//   searchId: number | null = null; // Search text for ID

 

//   bugs: Bug[] = [
//     {
//       id: 1,
//       name: 'Bug 1',
//       description: 'This is bug 1 description',
//       developer: 'John Doe',
//       reporter: 'Jane Smith',
//       status: 'open',
//       updateStatus: '',
//       createdOn: '2023-06-17',
//       projectId:1
//     },
//     {
//       id: 2,
//       name: 'Bug 2',
//       description: 'This is bug 1 description',
//       developer: ' Doe John',
//       reporter: 'Smith Jenny',
//       status: 'Closed',
//       updateStatus: '',
//       createdOn: '2023-06-17',
//       projectId:1
//     },
//     {
//       id: 3,
//       name: 'Bug 3',
//       description: 'This is bug 2 description',
//       developer: 'John Doe',
//       reporter: 'Jane Smith',
//       status: 'In Progress',
//       updateStatus: '',
//       createdOn: '2023-06-18',
//       projectId:1
//     },
//     // Add more bug objects as needed
//   ];



//   logout() {
   
//     this.router.navigate(['/landing']);
//   }
  
//   // deleteBug(index: number) {
//   //   this.bugs.splice(index, 1); // Remove the bug from the array based on the provided index
//   // }

//   updateBugStatus(bug: Bug) {
//     // Perform any necessary update logic here, such as making an API call
//     console.log(`Bug ${bug.name} status updated to: ${bug.status}`);

//     bug.updateStatus = bug.status; // Update the 'updateStatus' field with the new status
//   }

//   formatDate(dateString: string): string {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
//   }

//   search(): void {
//     this.filteredBugs = this.bugs.filter((bug: Bug) => {
//       const searchTextLower = this.searchText.toLowerCase();
//       const idMatch = bug.id.toString().includes(searchTextLower);
//       const nameMatch = bug.name.toLowerCase().includes(searchTextLower);
//       const statusMatch = bug.status.toLowerCase().includes(searchTextLower);
  
//       return idMatch || nameMatch || statusMatch;
//     });
//   }
//   filteredBugs: Bug[] = this.bugs; // Initialize with all bugs on component load

  
// }

export class BComponent {
  constructor(private router: Router) {}

  searchText: string = ''; // Search text for Bug Name
  searchStatus: string = ''; // Search text for Status
  searchId: number | null = null; // Search text for ID

  bugs: BugEntity[] = [
    {
      id: 1,
      name: 'Bug 1',
      description: 'This is bug 1 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'open',
      updateStatus: '',
      createdOn: new Date('2023-06-17'),
      projectId: 1
    },
    {
      id: 2,
      name: 'Bug 2',
      description: 'This is bug 1 description',
      developer: 'Doe John',
      reporter: 'Smith Jenny',
      status: 'Closed',
      updateStatus: '',
      createdOn: new Date('2023-06-17'),
      projectId: 1
    },
    {
      id: 3,
      name: 'Bug 3',
      description: 'This is bug 2 description',
      developer: 'John Doe',
      reporter: 'Jane Smith',
      status: 'In Progress',
      updateStatus: '',
      createdOn: new Date('2023-06-18'),
      projectId: 1
    },
    // Add more bug objects as needed
  ];

  logout() {
    this.router.navigate(['/landing']);
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
}
