import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../services';

@Component({
  selector: 'gantabya-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.scss']
})
export class EventCrudComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _eventsService: EventsService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      organizer: ['', Validators.required],
      date: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });
  }

  addEvent(newEvent: any): void {
    this._eventsService.createEvent(newEvent);
  }

}