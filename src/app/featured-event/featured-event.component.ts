import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../models';

@Component({
    selector: 'gantabya-featured-event',
    templateUrl: './featured-event.component.html',
    styleUrls: ['./featured-event.component.scss']
})
export class FeaturedEventComponent implements OnInit {

    @Input() featuredEvent: Event;

    constructor() {
    }

    ngOnInit() {
    }

}
