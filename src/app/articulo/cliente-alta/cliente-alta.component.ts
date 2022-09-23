import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Despacho } from 'src/app/models/despacho';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-cliente-alta',
  templateUrl: './cliente-alta.component.html',
  styleUrls: ['./cliente-alta.component.css']
})
export class ClienteAltaComponent implements OnInit, OnDestroy {

  clientes: Cliente;
  despachos : Despacho[];

  private suscripcion = new Subscription();

  @ViewChild("Formulario")  formulario: NgForm;

  constructor(private clienteService: ClienteService,
              private despachoService: DespachoService,
              private route : Router) { }

  ngOnInit(): void {
    this.cargarCombo();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }


  guardar(){
    this.suscripcion.add(
      this.clienteService.agregarCliente(this.clientes).subscribe({
        next: ()=>{
          this.route.navigate(['cliente-listado']);          
        },
        error: ()=> {
          alert('Error guardando');
        }
      })
    )
  }

  cargarCombo(){
    this.clientes = { tipoDespacho : {} } as Cliente;
    this.suscripcion.add(
      this.despachoService.obtenerDespacho().subscribe({
        next: (respuesta: Despacho[]) => {
          this.despachos = respuesta;
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }

  cancelar(){
    this.route.navigate(['clientes-listado']);
  }

}
