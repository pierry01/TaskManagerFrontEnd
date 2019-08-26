import { Injectable } from '@angular/core'
import { HttpResponse } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Angular2TokenService } from 'angular2-token'

import { User } from './user.model'

@Injectable()

export class AuthService{
  constructor(private tokenService: Angular2TokenService){ }

  signUp(user: User){
    // Call Angular2-Token SignUp Method
    // returns a Observable<Response>
  }

  signIn(uid: string, password: string){
    // Call Angular2-Token SignIn Method
    // returns a Observable<Response>
  }

  signOut(){
    // Call Angular2-Token SignOut Method
    // returns a Observable<Response>
  }

  isSignedIn(){
    // Call Angular2-Token userSignedIn Method
    // returns a Boolean
  }

  private handleErrors(error: Response){
    console.log('Salvando o erro ->', error)
    return Observable.throw(error)
  }
}
