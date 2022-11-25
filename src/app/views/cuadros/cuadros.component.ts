import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-cuadros',
  templateUrl: './cuadros.component.html',
  styleUrls: ['./cuadros.component.css']
})
export class CuadrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    window.addEventListener('load', AOS.refresh)
  }

}
