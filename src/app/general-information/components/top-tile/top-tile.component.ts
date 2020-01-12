import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tile',
  templateUrl: './top-tile.component.html',
  styleUrls: ['./top-tile.component.css']
})
export class TopTileComponent implements OnInit {

  public currentDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
