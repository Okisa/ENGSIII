import { Component, OnInit } from '@angular/core';
import {Cliente} from './clientes';
import {ClienteService} from './cliente-service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService]
})
export class ClienteComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteService:ClienteService) {
    this.clientes = clienteService.getClientes();
    console.log("Clientes iniciados");
   }

  ngOnInit() {
    
  }

  

}
