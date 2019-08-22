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
  tasksUrl = 'api/tasks'
  
  constructor(private httpClient: HttpClient){ }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  getImportantTasks(): Observable<Task[]>{
    return this.getTasks().pipe(
      map(tasks => tasks.slice(0, 3)),
      catchError(this.handleError)
    )
  }

  getTask(id: number): Observable<Task>{
    let url = `${this.tasksUrl}/${id}`

    return this.httpClient.get<Task>(url)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  createTask(task: Task): Observable<Task>{
    let url = this.tasksUrl
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
    
    return this.httpClient.post<Task>(url, task, headers)
      .pipe(
        catchError(this.handleError),
        map(() => task)
      )
  }

  updateTask(task: Task): Observable<Task>{
    let url = `${this.tasksUrl}/${task.id}`
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
    
    return this.httpClient.put<Task>(url, task, headers)
      .pipe(
        catchError(this.handleError),
        map(() => task)
      )
  }
  
  deleteTask(id: number): Observable<null>{
    let url = `${this.tasksUrl}/${id}`
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
    
    return this.httpClient.delete<Task>(url, headers)
      .pipe(
        catchError(this.handleError),
        map(() => null)
      )
  }
  
  private
  
  handleError(error: Response){
    console.log('Salvando o erro ->', error)
    return Observable.throw(error)
  }
}
