import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cgu-modal',
  templateUrl: './cgu-modal.component.html',
  styleUrls: ['./cgu-modal.component.scss'],
})
export class CguModalComponent implements OnInit {
  showCguModal: boolean = false;

  @Output()
  onCloseCgu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  closeCGU() {
    this.onCloseCgu.emit(null);
  }
}
