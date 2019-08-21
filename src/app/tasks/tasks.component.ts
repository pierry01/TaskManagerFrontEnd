import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service'

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
  tasks: Array<Task>
  selectedTask: Task
  
  constructor(private taskService: TaskService){ }
  
  ngOnInit(){
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }
  
  onSelect(task: Task): void{
    this.selectedTask = task
  }
}
