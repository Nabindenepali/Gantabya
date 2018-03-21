import { Component, ElementRef, OnInit } from '@angular/core';
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
  image: File;

  constructor(private _eventsService: EventsService, private _fb: FormBuilder, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.eventForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      organizer: ['', Validators.required],
      date: ['', Validators.required],
      image: ['', Validators.required]
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
        date: event.date
      };
      const imageData = new FormData();
      imageData.append('image', this.image);
      this._eventsService.createEvent(eventPayload)
          .subscribe(
              event => {
                this.errors = [];
                this.success = true;
                this._eventsService.addImage(event.id, imageData)
                    .subscribe();
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

  onFileChange(fileInput: any): void {
    this.image = fileInput.target.files[0];
    this.eventForm.controls['image'].setValue(this.image ? this.image.name : '');
    const reader = new FileReader();
    const preview = this._elementRef.nativeElement.querySelector('#preview');
    reader.onload = (evt: any) => {
      preview.src = evt.target.result;
    };
    reader.readAsDataURL(this.image);
  }

}