import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TaskManager'
  
  task1: Task = {
    id: 21,
    title: 'Título XXX'
  }
  
  task2: Task = new Task(22, 'Título YYY')
}

export class Task {
  public id: number
  public title: string
  
  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}
