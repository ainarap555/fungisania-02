import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { NovedadesComponent } from './paginas/novedades/novedades.component';
import { MiEmprendimientoComponent } from './paginas/mi-emprendimiento/mi-emprendimiento.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { CompraComponent } from './paginas/compra/compra.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './auth/registro/registro.component';
export const routes: Routes = [
    {path: 'inicio', component:InicioComponent}, 
    {path: 'productos', component: ProductosComponent},
    {path: 'inicio/productos',component: ProductosComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'inicio/ofertas', component: OfertasComponent},
    {path: 'novedades', component: NovedadesComponent},
    {path: 'inicio/novedades', component: NovedadesComponent},
    {path: 'miEmprendimiento', component: MiEmprendimientoComponent},
    {path: 'inicio/miEmprendimiento', component: MiEmprendimientoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'inicio/contacto', component: ContactoComponent},
    {path: '', redirectTo: 'inicio',pathMatch: 'full'},
    {path: '**', redirectTo:'home'},
    {path: 'carrito', component: CarritoComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'compra', component: CompraComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'iniciarSesion', component: IniciarSesionComponent}
];
