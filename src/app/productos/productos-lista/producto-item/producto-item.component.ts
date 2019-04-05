import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/productos/Producto';
import { ProductosService } from '../../productos.service';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  constructor() { }

  @Input() producto: Producto[];
  @Input() car: Producto[];
  @Output() addcar = new EventEmitter();
  @Output() delcar = new EventEmitter();
  @Output() infocar = new EventEmitter();

  ngOnInit() {
  }

  quitarProducto() {
    this.delcar.emit(this.producto);
  }

  anadirProducto() {
    this.addcar.emit(this.producto);
  }

  infoProducto() {
    this.infocar.emit(this.producto);
  }



}
