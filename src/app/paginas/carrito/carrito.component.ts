import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompraComponent } from '../compra/compra.component';
@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  //areglo que guarda los productos en el carrito, con su cantidad
productosEnCarrito: {producto: Producto; cantidad: number}[] = []
//El servidor se inyecta en el constructor de carrito
constructor (private carritoService: CarritoService, private router: Router) {}
//Metodo que se ejecuta cuando se inicia el componente
ngOnInit (): void{
    this.carritoService.carrito$.subscribe((Productos)=>{
      this.productosEnCarrito = Productos;
    });
}
agregarCantidad(index:number){
  this.productosEnCarrito[index].cantidad++
}
quitarCantidad(index:number){
  if(this.productosEnCarrito[index].cantidad > 1){
    this.productosEnCarrito[index].cantidad--
  }
}
eliminarProducto(productoId:number){
  this.carritoService.eliminarDelCarrito(productoId);
}
vaciarCarrito(){
  this.carritoService.vaciarCarrito();
}
realizarCompra(){
  alert('Compra realizada exitosamente')
  this.vaciarCarrito();
}
irAlFormulario(){
  this.router.navigate(['/compra']);
}
calcularTotal(): number{
  return this.productosEnCarrito.reduce((total, item) => {
    return total + item.producto.precio * item.cantidad
  },0)
}
}
