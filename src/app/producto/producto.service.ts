import { Injectable } from '@angular/core';
import { PRODUCTOS } from './productos.json';
import { Producto } from './producto';

@Injectable()
export class ProductoService {

  constructor() { }

  getProductos (): Producto[] {
    return PRODUCTOS;
  }
}
