// "Input" propiedad para establecer que se pasaran propiedades a este componente
import { Component, OnInit, Input } from '@angular/core';
//Importación del modelo de datos de linkModel
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  //Recivirá una entrada con una propiedad llamada link
  @Input() link: Link;
  constructor() {}

  ngOnInit(): void {}
}
