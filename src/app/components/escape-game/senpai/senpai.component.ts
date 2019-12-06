import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senpai',
  templateUrl: './senpai.component.html',
  styleUrls: ['./senpai.component.scss']
})
export class SenpaiComponent implements OnInit {

  public people = [
    'MECI : #4269',
    'RAMI : #3049',
    'MARC : #4036',
    'ERIC : #2396',
    'REMI : #3249',
    'MARIE : #40392'
  ]

  constructor() { }

  ngOnInit() {
  }

}
