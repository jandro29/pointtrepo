import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showFiller = false;

  panelOpenState = false;
  constructor() {
   }


   reload () { this.ngOnInit(); }

  ngOnInit(): void {
    AOS.init();

    window.addEventListener('load', AOS.refresh)

  }



}
