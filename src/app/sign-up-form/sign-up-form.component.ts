import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { FormUtils } from '../shared/form.utils'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form-component.html'
})

export class SignUpFormComponent{
  form: FormGroup
  formUtils: FormUtils

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: [null, [Validators.required]]
    })

    this.formUtils = new FormUtils(this.form)
  }

  signUpUser(){
    console.log('Formulário de SignUp enviado!')
    console.log(this.form.value)
  }
}
