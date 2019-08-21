// Angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms'

// Components imports
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component'
import { TasksComponent } from './tasks/tasks.component'

// Services imports
import { TaskService } from './tasks/shared/task.service'

// Modules imports
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
