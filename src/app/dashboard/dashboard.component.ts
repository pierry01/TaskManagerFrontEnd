import { Component, OnInit } from '@angular/core'

import { Task } from '../tasks/shared/task.model'
import { TaskService } from '../tasks/shared/task.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  tasks: Task[]
  
  constructor(private taskService: TaskService){ }
  
  ngOnInit(){
    this.taskService.getImportant()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }
}
