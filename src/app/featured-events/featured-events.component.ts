import {Component, OnInit} from '@angular/core';
import {Event} from '../models';

@Component({
    selector: 'gantabya-featured-events',
    templateUrl: './featured-events.component.html',
    styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

    featuredEvents: Event[] = [];

    constructor() {
    }

    ngOnInit() {
        this.featuredEvents = [
            new Event(
                1,
                'Horse Riding',
                'Horse Riding in Patan, Nepal',
                'Nepal Horse Riders Association',
                '2018-02-14',
                'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/06/11/horse-riding-intelligence.jpg'
            ),
            new Event(
                2,
                'Momo Festival',
                'Momo Festival in Bhrikutimandap',
                'The Bakery Cafe',
                '2018-02-6',
                'https://i0.wp.com/www.theindianfoodies.com/wp-content/uploads/2016/02/momo3-1.jpg?fit=614%2C409'
            ),
            new Event(
                3,
                'Shoe Sale',
                'Shoe Sale at Adidas, Durbarmarg',
                'Adidas Nepal',
                '2018-02-14',
                'https://assets.adidas.com.au/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/ultraboost-pac-local_tcm226-196616.jpg'
            )
        ]

    }

}
