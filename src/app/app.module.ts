import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { TasksComponent } from './tasks/tasks.component'

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks',
    component: TasksComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
