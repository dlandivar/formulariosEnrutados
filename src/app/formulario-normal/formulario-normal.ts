import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {
/*nombre:string='';
nombres:string[]=[];
agregarNombre() {
  if (this.nombre.trim() !== '') {
    this.nombres.push(this.nombre.trim());
    this.nombre = '';
  }
}*/
}
