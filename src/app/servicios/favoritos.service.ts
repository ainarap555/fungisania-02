import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../modelos/producto.model';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
private favoritosSubject = new BehaviorSubject <Producto[]>([]);
favoritos$ = this.favoritosSubject.asObservable();
agregarAFavoritos(producto: Producto){
  const favoritos = this.favoritosSubject.getValue();
  const encontrado = favoritos.find(p => p.id === producto.id)
  if(!encontrado){
    this.favoritosSubject.next([...favoritos, producto]);
  }
}
eliminarDeFavoritos(productoId: number){
  const anular = this.favoritosSubject.getValue().filter(p=>p.id !=productoId);
  this.favoritosSubject.next(anular);
}
vaciarFavoritos(){
  this.favoritosSubject.next([]);
}
 
}
