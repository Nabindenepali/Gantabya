import { Component, OnInit } from '@angular/core';
import { Event } from '../models';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'gantabya-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Array<Event> = [];

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this.events = this._eventsService.geAllEvents();
  }

}
