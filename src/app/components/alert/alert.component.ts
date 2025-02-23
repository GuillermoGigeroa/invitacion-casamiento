import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input()
  visible = true;
  @Input()
  message = 'Alert!';
  @Output()
  event = new EventEmitter();

  close() {
    this.event.emit();
  }
}
