import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteBajaComponent } from './articulo/cliente-baja/cliente-baja.component';
import { ClienteAltaComponent } from './articulo/cliente-alta/cliente-alta.component';
import { ClienteListadoComponent } from './articulo/cliente-listado/cliente-listado.component';
import { ClienteModificacionComponent } from './articulo/cliente-modificacion/cliente-modificacion.component';
import { HomeComponent } from './articulo/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteBajaComponent,
    ClienteAltaComponent,
    ClienteListadoComponent,
    ClienteModificacionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
