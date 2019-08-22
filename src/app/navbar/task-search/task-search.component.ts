import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Task } from '../../tasks/shared/task.model'
import { TaskService } from '../../tasks/shared/task.service'

import { Subject, Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})

export class TaskSearchComponent implements OnInit{
  searchTerms: Subject<string> = new Subject()
  tasks: Task[] = []
  
  constructor(private taskService: TaskService, private router: Router) { }
  
  ngOnInit(){
    this.searchTerms.pipe(
      switchMap(
        term => term ? this.taskService.searchByTitle(term) : of<Task[]>([])
      )
    ).subscribe(tasks => this.tasks = tasks)
  }

  search(term: string){
    this.searchTerms.next(term)
  }
  
  goToTask(task: Task){
    this.tasks = []
    this.router.navigate(['/tasks', task.id])
  }
}
