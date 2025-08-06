import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  formularioIniciarSesion!: FormGroup;
  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.formularioIniciarSesion = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

verificarRegistro(){

}

empezarInicioSesion(){

}
}
