import { Injectable } from '@angular/core';
import { Bug } from './model/BugEntity';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BugService {

  constructor(private http: HttpClient) {}
  
  private bugs: Bug[] = [];
  private baseUrl = 'http://your-api-url'; // Replace with your actual API endpoint

  assignTask(newBug: Bug) {
    // Implement the logic to assign a task to a bug
    // For example, you can update the bug's developer or status
    const bugToUpdate = this.bugs.find(bug => bug.id === newBug.id);
    if (bugToUpdate) {
      bugToUpdate.developer = newBug.developer;
      bugToUpdate.status = newBug.status;
      console.log('Task assigned to bug:', bugToUpdate);
    } else {
      console.log('Bug not found:', newBug);
    }
  }

  getBugs(): Bug[] {
    return this.bugs;
  }

  addBug(bug: Bug) {
    this.bugs.push(bug);
    console.log('Bug added:', bug);
  }

  deleteBug(index: number): void {
    this.bugs.splice(index, 1);
  }

  getBugById(bugId: string): Observable<Bug> {
    const url = `${this.baseUrl}/bugs/${bugId}`; // Replace with the actual endpoint for retrieving a bug by ID
    return this.http.get<Bug>(url);
  }

  updateBug(bug: Bug): Observable<any> {
    const url = `${this.baseUrl}/bugs/${bug.id}`; // Replace with the actual endpoint for updating a bug
    return this.http.put(url, bug);
  }
}
