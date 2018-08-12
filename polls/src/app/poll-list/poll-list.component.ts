import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  polls = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit() {
  }

}
