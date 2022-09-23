import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Despacho } from 'src/app/models/despacho';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-cliente-modificacion',
  templateUrl: './cliente-modificacion.component.html',
  styleUrls: ['./cliente-modificacion.component.css']
})
export class ClienteModificacionComponent implements OnInit, OnDestroy {

 @Input() clientes : Cliente;
 despachos: Despacho[];
  
  
private suscripcion = new Subscription();

  constructor(private clienteServicio : ClienteService,
              private despachoServicio : DespachoService,
              private route : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardar(){

  }

  cancelar(){
    this.route.navigate(['cliente-listado']);
  }

}
