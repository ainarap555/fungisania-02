import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';
import { NavegadorService } from '../../servicios/navegador.service';


@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  productosEnNavegador: Producto[]=[]
  constructor(private navegadorService: NavegadorService, private router: Router){}
ngOnInit(): void {
 this.navegadorService.navegador$.subscribe((productos)=>{
  this.productosEnNavegador = productos
 }) 
}
//buscarNav(producto: Producto){this.navegadorService.buscar();}
preventDefault(){

}

  // Indica si el modo oscuro está activado o no
  modoOscuroActivado = false;
 // Método que se ejecuta al hacer clic en el botón de modo claro/oscuro
  alternarModoOscuro() {
    // Cambiamos el valor al opuesto
    this.modoOscuroActivado = !this.modoOscuroActivado;

    // Guardamos el nuevo valor en localStorage si estamos en el navegador
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('modoOscuro', String(this.modoOscuroActivado));
    }

    // Aplicamos el modo correspondiente (agregando o quitando la clase)
    this.aplicarModoOscuro();
  }

// Método privado que aplica o quita el modo oscuro según el valor de 'modoOscuroActivado'
private aplicarModoOscuro() {
  // Verificamos que estemos en un entorno donde existe 'document' (es decir, en el navegador)
  if (typeof document !== 'undefined') {
    
    // Si el modo oscuro está activado...
    if (this.modoOscuroActivado) {
      // ...agregamos la clase 'dark-mode' al body del documento
      // Esto hace que se apliquen todos los estilos definidos en CSS para el modo oscuro
      document.body.classList.add('dark-mode');
    } else {
      // Si el modo oscuro NO está activado, quitamos la clase 'dark-mode' del body
      // Así vuelve al modo claro
      document.body.classList.remove('dark-mode');
    }
  }
} 
}
