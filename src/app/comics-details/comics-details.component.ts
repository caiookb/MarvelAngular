import { Component, OnInit, Input } from '@angular/core';
import { Comics } from '../models/comics';
import { ActivatedRoute, Params } from '@angular/router';
import { ComicsService } from '../services/comics.service';
import { Location } from '@angular/common';


declare var $: any;


@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {

  @Input()
  comic: Comics;
  comicdetail;


  constructor(private comicsService: ComicsService, private route: ActivatedRoute, private location: Location) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.comicsService.getComic(id).subscribe(comicdetail => 
        this.comicdetail = comicdetail.data.results
        );
     })
  
  }

 


  goBack(): void{
    this.location.back();
     }
  }