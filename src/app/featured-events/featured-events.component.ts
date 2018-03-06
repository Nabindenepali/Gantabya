import { Component, OnInit } from '@angular/core';
import { Event } from '../models';
import { EventsService } from '../services';

@Component({
    selector: 'gantabya-featured-events',
    templateUrl: './featured-events.component.html',
    styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

    featuredEvents: Array<Event> = [];

    constructor(private _eventsService: EventsService) {
    }

    ngOnInit() {
        this.featuredEvents = this._eventsService.getFetauredEvents();
    }

}
