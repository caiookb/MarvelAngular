import { Component, OnInit, Input } from '@angular/core';
import { Comics } from '../models/comics';

declare var $:any;


@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {
  
  @Input()
  comic: Comics;
  
  constructor() { }

  ngOnInit() {
 
  }



}
