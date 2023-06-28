export interface BugEntity {
    id: number;
    name: string;
    description: string;
    developer: string;
    reporter: string;
    status: string;
    updateStatus: string;
    createdOn: Date;
    projectId:number;
  }
  