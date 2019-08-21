import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Task } from './task.model'

const TASKS: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' }
]

@Injectable()

export class TaskService {
  tasksUrl = 'api/tasks'
  
  constructor(private httpClient: HttpClient){ }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksUrl)
  }

  getImportantTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS.slice(0, 3))
  }

  getTask(id: number): Promise<Task>{
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id))
  }
}
