export class Task {
    constructor(
      public name: string,
      public urgent: boolean,
      public category: string,
      public done: boolean
    ) {}
  
    static createTask(name: string, urgent: boolean, category: string, done: boolean): Task {
      return new Task(name, urgent, category, done);
    }
  }
  