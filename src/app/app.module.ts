// Angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// Angular Plugins
import { Angular2TokenService, A2tUiModule } from 'angular2-token'

// Components imports
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component'
import { TaskSearchComponent } from './navbar/task-search/task-search.component'
import { TasksComponent } from './tasks/tasks.component'

// Services imports
import { AuthService } from './shared/auth.service'
import { TaskService } from './tasks/shared/task.service'

// Modules imports
import { AppRoutingModule } from './app-routing.module'

// JQuery plugins
import * as $ from 'jquery'

@NgModule({
  declarations: [
    A2tUiModule,
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TaskDetailComponent,
    TasksComponent,
    TaskSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    Angular2TokenService,
    AuthService,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
