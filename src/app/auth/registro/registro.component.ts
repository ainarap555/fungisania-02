import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'  
})
export class RegistroComponent {
  formularioRegistro!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      verificacion: ['', Validators.required]
    }
    );
  }
  generarRegistro(){
    
  }
  guardarRegistro(){

  }
}
