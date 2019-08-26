import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { switchMap } from 'rxjs/operators'

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
  reactiveTaskForm: FormGroup
  task: Task

  taskDoneOptions: Array<any> = [
    { value: false, text: 'Pendente' },
    { value: true, text: 'Feita' }
  ]

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){ 
    this.reactiveTaskForm = this.formBuilder.group({
      title: [null],
      deadline: [null],
      done: [null],
      description: [null] 
    })
  }

  ngOnInit(){
    this.task = new Task(null, null)

    this.route.params.pipe(
      switchMap((params: Params) => this.taskService.getById(+params['id'])))
      .subscribe(
        task => this.setTask(task),
        error => alert('Ocorreu um erro no servidor. Tente mais tarde...')
      )
  }

  setTask(task: Task): void {
    this.task = task

    this.reactiveTaskForm.patchValue(task)
  }

  ngAfterViewInit(){
    $('#deadline').datetimepicker({
      sideBySide: true,
      'locale': 'pt-br'
    }).on('dp.change', () => {
      this.reactiveTaskForm.get('deadline').setValue($('#deadline').val())
    })
  }

  goBack(){
    this.location.back()
  }

  updateTask(){
    this.taskService.update(this.task)
      .subscribe(
        () => alert('Tarefa atualizada com sucesso!'),
        error => alert('Ocorreu um erro no servidor, tente mais tarde...')
      )
  }

  showFieldError(field): boolean{
    return field.invalid && (field.touched || field.dirty)
  }
}
