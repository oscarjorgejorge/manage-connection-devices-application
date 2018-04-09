import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() add = new EventEmitter<object>();
  @Output() hideFormClick = new EventEmitter<boolean>();

  feedbackEnabled : boolean;
  processing : boolean;
  newDevice : any;
  error = null;

  constructor() { }

  // --- The function sets the values of the propieties of the class
  ngOnInit() {
    this.feedbackEnabled = false;
    this.processing = false;
  }

  // --- The function checks if the form has been correctly completed and sends the data to the parent page component. 
  // --- Also changes de values of the propeties of the class (to allow the feedback comments appear and not allow more submitions)
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = this.newDevice;
      this.add.emit(data)
    }
  }

  // --- The function change send a boolean to the parent component to hide the form.
  handleHideForm() {
    this.hideFormClick.emit(false)
  }

}