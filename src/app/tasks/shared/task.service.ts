import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

// RXJS
import { from } from 'rxjs'
import { Observable, throwError } from 'rxjs'
import { map } from 'rxjs/operators'
import { catchError, retry } from 'rxjs/operators'

import { Task } from './task.model'

@Injectable()

export class TaskService {
  tasksUrl = 'http://api.taskmanager.dev:3000/tasks'
  headers = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
  
  constructor(private httpClient: HttpClient){ }

  getAll(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleErrors)
      )
  }

  getImportant(): Observable<Task[]>{
    return this.getAll().pipe(
      map(tasks => tasks.slice(0, 3)),
      catchError(this.handleErrors)
    )
  }

  getById(id: number): Observable<Task>{
    let url = `${this.tasksUrl}/${id}`

    return this.httpClient.get<Task>(url)
      .pipe(
        catchError(this.handleErrors)
      )
  }
  
  create(task: Task): Observable<Task>{
    let url = this.tasksUrl

    return this.httpClient.post<Task>(url, task, this.headers)
      .pipe(
        catchError(this.handleErrors),
        map(() => task)
      )
  }

  update(task: Task): Observable<Task>{
    let url = `${this.tasksUrl}/${task.id}`

    return this.httpClient.put<Task>(url, task, this.headers)
      .pipe(
        catchError(this.handleErrors),
        map(() => task)
      )
  }
  
  delete(id: number): Observable<null>{
    let url = `${this.tasksUrl}/${id}`

    return this.httpClient.delete<Task>(url, this.headers)
      .pipe(
        catchError(this.handleErrors),
        map(() => null)
      )
  }
  
  searchByTitle(term: string): Observable<Task[]>{
    let url = `${this.tasksUrl}?title=${term}`
    
    return this.httpClient.get<Task[]>(url)
      .pipe(
        catchError(this.handleErrors),
      )
  }
  
  private
  
  handleErrors(error: Response){
    console.log('Salvando o erro ->', error)
    return Observable.throw(error)
  }
}
