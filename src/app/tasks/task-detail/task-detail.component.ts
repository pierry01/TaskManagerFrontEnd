import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

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
  taskDoneOptions: Array<any>


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

    this.reactiveTaskForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
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
    this.task.title = this.reactiveTaskForm.get('title').value
    this.task.deadline = this.reactiveTaskForm.get('deadline').value
    this.task.done = this.reactiveTaskForm.get('done').value
    this.task.description = this.reactiveTaskForm.get('description').value

    this.taskService.update(this.task)
      .subscribe(
        () => alert('Tarefa atualizada com sucesso!'),
        error => alert('Ocorreu um erro no servidor, tente mais tarde...')
      )
  }

  // Form ERRORS METHODS
  fieldClassForErrorOrSuccess(fieldName: string){
    return {
      'is-invalid': this.showFieldError(fieldName),
      'is-valid': this.getField(fieldName).valid
    }
  }

  showFieldError(fieldName: string): boolean{
    let field = this.getField(fieldName)
    return field.invalid && ( field.touched || field.dirty )
  }

  getField(fieldName: string){
    return this.reactiveTaskForm.get(fieldName)
  }
}
