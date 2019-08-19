import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service'

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  providers: [ TaskService ]
})

export class TasksComponent implements OnInit {
  tasks: Array<Task>
  selectedTask: Task
  
  constructor(private taskService: TaskService){
    
  }
  
  ngOnInit(){
    this.tasks = this.taskService.getTasks()
  }
  
  onSelect(task: Task): void {
    this.selectedTask = task
  }
}
