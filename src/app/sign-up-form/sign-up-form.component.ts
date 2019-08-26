import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent{
  userForm: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(100)]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, [Validators.required]]
    })
  }

  signUpUser(){
    console.log('Formulário de SignUp enviado!')
    console.log(this.userForm.value)
  }
}
