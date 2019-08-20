import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component'
import { TasksComponent } from './tasks/tasks.component'
import { TaskService } from './tasks/shared/task.service'

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  
  {
    path: 'tasks',
    component: TasksComponent
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
])

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTES
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
