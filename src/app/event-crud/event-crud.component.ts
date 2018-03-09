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
  loading = false;
  formSubmitted = false;
  errors = [];
  success = false;

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

  createEvent(event: any): void {
    this.formSubmitted = true;
    this.loading = true;
    if (this.eventForm.valid) {
      const eventPayload = {
        name: event.name,
        description: event.description,
        organizer: event.organizer,
        date: event.date,
        image_link: event.imgUrl
      }
      this._eventsService.createEvent(eventPayload)
          .subscribe(
              () => {
                this.errors = [];
                this.success = true;
              },
              error => {
                this.success = false;
                const eventErrors = error.errors;
                if (eventErrors.name.includes('has already been taken')) {
                  this.errors.push('duplicate_name');
                  this.eventForm.controls['name'].markAsPristine();
                }
              }
          );
      this.loading = false;
    } else {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }

}