import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.sass']
})
export class MenuSuperiorComponent implements OnInit {

  @Output() OpenMenuLateral = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  abreMenuLateral(){
      this.OpenMenuLateral.emit();
  }

}
