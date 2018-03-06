import { Injectable } from '@angular/core';
import { Event } from '../../models/event';

@Injectable()
export class EventsService {

    private events: Array<Event>;
    private featuredEvents: Array<Event>;

    constructor() {

        this.events = [
            new Event(
                1,
                'Literature Festival',
                'Literature Festival in Bhrikutimandap, Exhibition Road',
                'Nepal Readers Society',
                '2018-02-15',
                'http://s0.geograph.org.uk/geophotos/05/08/05/5080594_054174db.jpg'
            ),
            new Event(
                2,
                'Akira Kurosawa Film Show',
                'Kumari Cinema Hall',
                'Nepal Japan Film Society',
                '2018-02-8',
                'https://samsfen.files.wordpress.com/2014/12/ranbdcap1_original.jpg'
            ),
            new Event(
                3,
                'Hiking to Chisapani',
                'Hiking to Chispani, Kathmandu',
                'Hike for Nepal',
                '2018-02-17',
                'http://www.guideinhimalaya.com/userfiles/slideshow_151.jpg'
            ),
            new Event(
                4,
                'Sekuwa Festival',
                'Sekuwa Festival at Tudikhel',
                'Bajeko Sekuwa',
                '2018-03-5',
                'https://images-na.ssl-images-amazon.com/images/I/81QwTNtASAL._SL1500_.jpg'
            ),
            new Event(
                5,
                'Nepal vs West Indies Cricket Match',
                'Tribuvan University Ground',
                'Cricket Association of Nepal',
                '2018-03-18',
                'http://1hu9t72zwflj44abyp2h0pfe-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/Nepali-cricket-players-field.jpg'
            )
        ];

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
        ];

    }

    geAllEvents(): Array<Event> {
        return this.events;
    }

    getFetauredEvents(): Array<Event> {
        return this.featuredEvents;
    }

    createEvent(event: any): void {
        const newEvent = new Event(this.events.length + 1, event.name, event.description, event.organizer, event.date, event.imgUrl);
        this.events.push(newEvent);
    }

}
