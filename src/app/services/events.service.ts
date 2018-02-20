import { Injectable } from '@angular/core';
import { Event } from '../models';

@Injectable()
export class EventsService {

  events: Array<Event>;

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
    ]
  }

  geAllEvents(): Array<Event> {
    return this.events;
  }

}
