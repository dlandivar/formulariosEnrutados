import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {
  profileForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  });
  emails: string[] = [];



  handleSubmit() {
    if (this.profileForm.value.email === null) {
      alert('El campo de correo electrónico no puede estar vacío.');
    } else {
      this.emails.push(this.profileForm.value.email!.trim());
    }

  }

}
