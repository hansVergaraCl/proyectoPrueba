import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.sass']
})
export class MenuDesplegableComponent implements OnInit {

  @ViewChild('drawer', null) public myNav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.myNav.toggle();
  }

}
