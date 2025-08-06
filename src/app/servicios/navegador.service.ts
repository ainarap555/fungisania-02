import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavegadorService {
  private navegadorSubject = new BehaviorSubject <Producto[]>([]);
  navegador$ = this.navegadorSubject.asObservable();
  textoFiltroActual: string = "";
  ProductosFiltrados = this.navegadorSubject.getValue();
  buscar(producto: Producto){
    const productos = this.navegadorSubject.getValue();
    const filtro = this.textoFiltroActual.toLowerCase().trim();
    if(!filtro){
      //Si el filtro esta vacio, muestra los productos
      this.ProductosFiltrados = [...productos, producto];
    }else{
      //Si hay texto, filtra los productos cuyo nombre o descripcion contienen ese texto
      this.ProductosFiltrados = this.navegadorSubject.getValue().filter(
        p=>p.nombre.toLocaleLowerCase().includes(filtro) ||
        p.descripcion.toLocaleLowerCase().includes(filtro)
      );
    }
  }
  limpiarFiltro(){
  this.textoFiltroActual = ""
  this.buscar()
}
}
