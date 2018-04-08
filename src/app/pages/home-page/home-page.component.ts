import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showForm : boolean;
  goodFeedbackEnabled: boolean;
  deviceList : Array<any>=[];
  sortBy : string;

  constructor() { }

  // --- The function sets the values of the propieties of the class
  ngOnInit() {
    this.showForm = false;
    this.goodFeedbackEnabled = false;
  }

  // --- The function changes the value of the property "showForm" in order to display the form. 
  displayForm() {
    this.showForm = true;
  }

  // --- The function changes the value of the property "showForm" in order to hide the form. 
  hideForm(hide) {
    this.showForm = hide;
  } 

  // --- The function changes differents properties value to hide the form and allow the confirmation that the new devide has been added.
  addNewDevice(newDevice) {
    this.showForm = false;
    this.goodFeedbackEnabled = true;
    
    // --- The function reset the value of "goodFeedbackEnabled" after 4secs. to hide the confirmation message.
    setTimeout(() => {
      this.goodFeedbackEnabled = false;
    }, 4000);

    // --- Adding a identification number to each device according to his position on the array.   
    // --- Adding the new device to the devices array.
    newDevice.identification = this.deviceList.length;
    this.deviceList.push(newDevice);
  }

  // --- The function delete the device that has been selected.
  deleteDevice(selectedDevice) {
    for (let x = 0; x < this.deviceList.length; x++) {
      if (this.deviceList[x].identification === selectedDevice) {
        this.deviceList.splice(x, 1)
      }
    }
  }

  // --- The function sorts the array by Name or Installation date.
  sortTheArrayBy() {
    if (this.sortBy === "Name") {
     this.deviceList.sort(function compare(a,b) {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      })
    } else if (this.sortBy === "Installation date") {
      this.deviceList.sort(function compare(a,b) {
        if (a.date < b.date) {
          return -1;
        } else if (a.date > b.date) {
          return 1;
        } else {
          return 0;
        }
      })
    }    
  }
}
