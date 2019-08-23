// Angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// Components imports
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component'
import { TaskSearchComponent } from './navbar/task-search/task-search.component'
import { TasksComponent } from './tasks/tasks.component'

// Services imports
import { TaskService } from './tasks/shared/task.service'

// Modules imports
import { AppRoutingModule } from './app-routing.module'

// InMemoryWebApi
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryTaskDataService } from './in-memory-task-data.service'

// JQuery plugins
import * as $ from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TaskDetailComponent,
    TasksComponent,
    TaskSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
