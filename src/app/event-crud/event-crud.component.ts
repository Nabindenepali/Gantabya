import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gantabya-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.scss']
})
export class EventCrudComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      organizer: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addEvent(newEvent: any): void {
    console.log(newEvent);
  }

}
