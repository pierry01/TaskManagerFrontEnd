import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import { switchMap } from 'rxjs/operators'

import { FormUtils } from '../../shared/form.utils'
import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
  form: FormGroup
  task: Task
  taskDoneOptions: Array<any>
  formUtils: FormUtils


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.taskDoneOptions = [
      { value: false, text: 'Pendente' },
      { value: true, text: 'Feita' }
    ]

    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null]
    })

    this.formUtils = new FormUtils(this.form)
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
    this.form.patchValue(task)
  }


  ngAfterViewInit(){
    $('#deadline').datetimepicker({
      sideBySide: true,
      'locale': 'pt-br'
    }).on('dp.change', () => {
      this.form.get('deadline').setValue($('#deadline').val())
    })
  }

  goBack(){
    this.location.back()
  }


  updateTask(){
    this.task.title = this.form.get('title').value
    this.task.deadline = this.form.get('deadline').value
    this.task.done = this.form.get('done').value
    this.task.description = this.form.get('description').value

    this.taskService.update(this.task)
      .subscribe(
        () => alert('Tarefa atualizada com sucesso!'),
        error => alert('Ocorreu um erro no servidor, tente mais tarde...')
      )
  }
}
