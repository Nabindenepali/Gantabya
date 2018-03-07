import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'gantabya-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  id: string;
  event: Event;

  constructor(private _route: ActivatedRoute, private _eventsService: EventsService) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.id = params['id']);
    this.event = this._eventsService.getEvent(this.id);
  }

}
