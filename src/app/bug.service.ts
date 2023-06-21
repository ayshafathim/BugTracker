import { Injectable } from '@angular/core';
import { Bug } from './bug.model';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class BugService {

  constructor() { }
  
  private bugs: Bug[] = [];
  

  assignTask(newBug: Bug) {
    throw new Error('Method not implemented.');
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

  
}
