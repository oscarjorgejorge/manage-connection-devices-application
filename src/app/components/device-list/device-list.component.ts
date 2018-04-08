import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  @Output() delete = new EventEmitter<number>();
  @Input() deviceList: Array<object>;

  constructor() { }

  ngOnInit() {
  }

  // --- The function recives the identification number from the child component and sends it to the parent page component.
  handleDeleteDevice(selectedDevice) {
    this.delete.emit(selectedDevice);
  }

}
