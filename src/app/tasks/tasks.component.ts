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
    this.taskService.getAll()
      .subscribe(
        tasks => this.tasks = tasks.sort((a, b) => b.id - a.id),
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }

  createTask(){
    this.newTask.title = this.newTask.title.trim()

    if(!this.newTask.title){
      alert('Tarefa deve ter um título')
    } else {
      this.taskService.create(this.newTask)
        .subscribe(
          task => {
            this.tasks.unshift(task)
            this.newTask = new Task(null, '')
          },
          () => alert('Ocorreu um erro no servidor. Tente mais tarde...')
        )
    }
  }
  
  deleteTask(task: Task){
    if(confirm(`Deseja realmente excluir a tarefa "${task.title}"?`)){
      this.taskService.delete(task.id)
        .subscribe(
          () => this.tasks = this.tasks.filter(t => t !== task),
          () => alert('Ocorreu um erro no servidor. Tente mais tarde...')
        )
    }
  }
}
