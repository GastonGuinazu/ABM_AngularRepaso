import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAltaComponent } from './articulo/cliente-alta/cliente-alta.component';
import { ClienteListadoComponent } from './articulo/cliente-listado/cliente-listado.component';
import { ClienteModificacionComponent } from './articulo/cliente-modificacion/cliente-modificacion.component';
import { HomeComponent } from './articulo/home/home.component';

const routes: Routes = [
  {path: 'cliente-alta', component: ClienteAltaComponent},
  {path: 'cliente-listado', component: ClienteListadoComponent},
  {path: 'cliente-modificacion', component: ClienteModificacionComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
