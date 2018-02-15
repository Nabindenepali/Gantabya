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
            {
                id: 1,
                name: 'Horse Riding',
                description: 'Horse Riding in Patan, Nepal',
                organizer: 'Nepal Horse Riders Association',
                date: '2018-02-14',
                imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/06/11/horse-riding-intelligence.jpg'
            },
            {
                id: 2,
                name: 'Momo Festival',
                description: 'Momo Festival in Bhrikutimandap',
                organizer: 'The Bakery Cafe',
                date: '2018-02-6',
                imgUrl: 'https://i0.wp.com/www.theindianfoodies.com/wp-content/uploads/2016/02/momo3-1.jpg?fit=614%2C409'
            },
            {
                id: 3,
                name: 'Shoe Sale',
                description: 'Shoe Sale at Adidas, Durbarmarg',
                organizer: 'Adidas Nepal',
                date: '2018-02-14',
                imgUrl: 'https://assets.adidas.com.au/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/ultraboost-pac-local_tcm226-196616.jpg'
            }
        ]

    }

}
