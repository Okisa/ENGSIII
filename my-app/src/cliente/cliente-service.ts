import {Cliente} from './clientes';
import {CLIENTES} from './mock-cliente';
import {Injectable} from '@angular/core';

@Injectable()
export class ClienteService {
    getClientes():Cliente[]{
        return CLIENTES;
    }

}