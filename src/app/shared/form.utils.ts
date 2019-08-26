import { FormGroup } from '@angular/forms'

export class FormUtils{
  constructor(private form: FormGroup){ }

  fieldClassForErrorOrSuccess(fieldName: string){
    return {
      'is-invalid': this.showFieldError(fieldName),
      'is-valid': this.getField(fieldName).valid
    }
  }

  showFieldError(fieldName: string): boolean{
    let field = this.getField(fieldName)
    return field.invalid && ( field.touched || field.dirty )
  }

  getField(fieldName: string){
    return this.form.get(fieldName)
  }
}
