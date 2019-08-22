import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { switchMap } from 'rxjs/operators'

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
  task: Task
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ){ }
  
  ngOnInit(){
    this.route.params.pipe(
      switchMap((params: Params) => this.taskService.getTask(+params['id'])))
      .subscribe(
        task => this.task = task,
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }
  
  goBack(){
    this.location.back()
  }
  
  updateTask(){
    if(!this.task.title){
      alert('A tarefa deve ter um título')
    } else {
      this.taskService.updateTask(this.task)
        .subscribe(
          () => alert('Tarefa atualizada com sucesso!'),
          error => alert('Ocorreu um erro no servidor, tente mais tarde...')
        )
    }
  }
}
