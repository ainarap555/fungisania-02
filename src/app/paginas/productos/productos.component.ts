import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { FormsModule } from '@angular/forms';
import { NavegadorService } from '../../servicios/navegador.service';
@Component({
  selector: 'app-productos',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  textoFiltroActual: string = "";
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Peonias",
      descripcion: "Ramo de flores chicas x 3",
      precio: 8000,
      cantidad: 10,
      disponibilidad: true,
      imagen: "/flores-x3-chicas.jpg",
    },
    {
      id: 2,
      nombre: "Rosas grandes",
      descripcion: "Ramo de flores grandes x3",
      precio: 15000,
      cantidad: 0,
      disponibilidad: false,
      imagen: "/flores-x3-grandes.jpeg",
    },
    {
      id: 3,
      nombre: "Flores fantasia",
      descripcion: "Ramo de flores x10",
      precio: 20000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/flores-x10-chicas.jpg",

    },
    {
      id: 4,
      nombre: "Lirio",
      descripcion: "Ramo de flores grandes x2",
      precio: 8000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/flores-x2-grandes.jpeg",

    },
    {
      id: 5,
      nombre: "Martirio",
      descripcion: "Ramo de flores grandes x3",
      precio: 12000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/flores-x3-grandes2.jpeg",

    },
     {
      id: 6,
      nombre: "¡Promo invierno!",
      descripcion: "Ramo de flores chicas x7",
      precio: 15000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/flores-x7-chicas.jpeg",

    },
     {
      id: 7,
      nombre: "Rosas grandes",
      descripcion: "Ramo de flores grandes x3",
      precio: 15000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/flores-x3-grandes4.jpeg",

    },
    {
      id: 8,
      nombre: "Rosas chicas",
      descripcion: "Ramo de flores grandes x5",
      precio: 15000,
      cantidad: 0,
      disponibilidad: true,
      imagen: "/ramo-x5-chicas.jpg",

    },
  ]
  //arreglo que contiene los productos que se muestran tras aplicar el filtro
  ProductosFiltrados: Producto[] = [...this.Productos];
//Constructor, donde inyectamos el servicio del carrito
constructor(private carritoService: CarritoService, private favoritosService: FavoritosService, private navegadorService: NavegadorService){}
//metodo para agregar un producto al carrito
agregarCarrito(producto: Producto){
  //Llama al método del servivio para agregar al producto del carrito
  this.carritoService.agregarAlCarrito(producto);
  //Muestra un mensaje de confirmacion al usuario
  alert('Producto agregado al carrito')
}
agregarFavorito(producto: Producto){
  this.favoritosService.agregarAFavoritos(producto);
  alert('Producto agregado a favoritos')
}
//buscarProductos(producto: Producto){this.navegadorService.buscar(producto);}
}