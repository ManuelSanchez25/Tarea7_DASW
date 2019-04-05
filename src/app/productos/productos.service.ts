import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cambiaDato = new Subject<Producto[]>();

  productos: Producto[] = [
    new Producto(1, 'Tres quesos', 'Deyuo', 'Comida', 120, 50),
    new Producto(1, 'Mar y tierra', 'Deyuo', 'Comida', 130, 40),
    new Producto(1, 'Yayo Roll', 'Deyuo', 'Comida', 110, 45),
    new Producto(1, 'Aguacate Roll', 'Deyuo', 'Comida', 95, 30),
    new Producto(1, 'Te Jazmin', 'Deyuo', 'Bebida', 20, 60),
    new Producto(1, 'Nieve', 'Deyuo', 'Postre', 25, 100),
  ];

  carrito = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  addCarrito(producto: Producto) {
    if (!this.carrito.includes(producto)) {
      this.carrito.push(Object.assign({}, producto));
      this.notificarCambios();
    }
  }

  borrarCarrito(id: number): boolean {
    const pos = this.carrito.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambios();
      return true;
    }
    return false;
  }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

}
