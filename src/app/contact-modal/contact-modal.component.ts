import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent implements OnInit {
  showModal: boolean = false;
  showCguModal: boolean = false;

  @Output()
  onClose = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.onClose.emit(null);
  }
  openCgu() {
    this.showCguModal = true;
  }
}
