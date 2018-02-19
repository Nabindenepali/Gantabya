import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gantabya-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
