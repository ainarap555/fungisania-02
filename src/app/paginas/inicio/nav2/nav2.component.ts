import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio.component';
import { Router } from '@angular/router';
import { Producto } from '../../../modelos/producto.model';
import { ProductosComponent } from '../../productos/productos.component';
@Component({
  selector: 'app-nav2',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav2.component.html',
  styleUrl: './nav2.component.css'
})
export class Nav2Component {
//filtro de catergorias
categoriaNav: {producto: Producto, categoria: string} [] = []
categoriaProducto(producto: string){
if (producto){

}
}
}
