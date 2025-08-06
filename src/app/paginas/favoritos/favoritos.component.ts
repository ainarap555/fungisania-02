import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
@Component({
  selector: 'app-favoritos',
  imports: [ CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
productosEnFavoritos: Producto[] = []
constructor (private favoritosService: FavoritosService, private router: Router, private carritoService: CarritoService) {}
ngOnInit(): void{
  this.favoritosService.favoritos$.subscribe((productos) => {
    this.productosEnFavoritos = productos
  }
  );
}
eliminarFavoritos(productoId: number){
  this.favoritosService.eliminarDeFavoritos(productoId)
}
vaciarFavoritos(){
  this.favoritosService.vaciarFavoritos();
}
agregarCarrito(producto: Producto){
  this.carritoService.agregarAlCarrito(producto);
  alert('Producto agregado al carrito')
}
}
