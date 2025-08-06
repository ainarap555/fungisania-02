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
buscarNav(producto: Producto){
  this.navegadorService.buscar();
}
preventDefault(){

}
}
