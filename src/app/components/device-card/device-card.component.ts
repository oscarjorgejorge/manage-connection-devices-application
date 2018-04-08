import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {
  @Output() delete = new EventEmitter<number>();
  @Input() device: any;

  constructor() { }

  ngOnInit() {
  }

  // --- The function sents to the parent component the identification number of the item that has to be deleted.
  deleteDeviceClick() {
    const selectedDevice = this.device.identification;
    this.delete.emit(selectedDevice);
  }
}
