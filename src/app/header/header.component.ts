import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isToggled!: boolean;
  showModal: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isToggled = false;
  }
  toggle() {
    if (this.isToggled === false) {
      this.isToggled = true;
    } else {
      this.isToggled = false;
    }
  }
  selectItem() {
    this.showModal = true;
  }
}
