import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service'

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
  tasks: Array<Task>
  newTask: Task

  constructor(private taskService: TaskService){
    this.newTask = new Task(null, '')
  }

  ngOnInit(){
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }

  createTask(){
    this.newTask.title = this.newTask.title.trim()

    if(!this.newTask.title){
      alert('Tarefa deve ter um título')
    } else {
      this.taskService.createTask(this.newTask)
        .subscribe(
          task => {
            this.tasks.push(task)
            this.newTask = new Task(null, '')
          },
          () => alert('Ocorreu um erro no servidor. Tente mais tarde...')
        )
    }
  }
}
