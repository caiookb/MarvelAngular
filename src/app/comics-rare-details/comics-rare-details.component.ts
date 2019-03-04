import { Component, OnInit, Input} from '@angular/core';
import { Comics } from '../models/comics';


@Component({
  selector: 'app-comics-rare-details',
  templateUrl: './comics-rare-details.component.html',
  styleUrls: ['./comics-rare-details.component.css']
})
export class ComicsRareDetailsComponent implements OnInit {

  @Input()
  comic: Comics;

  constructor() { }

  ngOnInit() {
  }

}
