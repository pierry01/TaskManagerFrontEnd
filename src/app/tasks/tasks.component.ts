import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'

const TASKS: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' }
]

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
  tasks
  
  ngOnInit(){
    this.tasks = TASKS
  }
}
