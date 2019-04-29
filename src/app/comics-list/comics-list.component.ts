import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comics } from '../models/comics';
import { RareComics } from '../models/RareComics';

import { ComicsService } from '../services/comics.service';
import { MaxLengthValidator } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})


export class ComicsListComponent implements OnInit {
  
  /**
  * O Input especifica quais propriedades podemos definir em um componente.
  */  @Input()

  comics: Comics[] = [];
  rareComic: Comics[] = [];
  sliceinit: number = 1;
  sliceend: number = 20;



  /**
  É onde ocorre as injeções de dependência, para que possa utilizar dos métodos.
  */  
  constructor(private comicsService: ComicsService, private route: ActivatedRoute, private router: Router){}

  /**
  ngOnInit ele é carregado assim que um componente inicia, então coloquei os métodos.
  de forma organizada aqui
  */  
  ngOnInit() {
    this.listComics();
  }

  /** 
  Método responsável por tratar os dados e exibir o array dos Comics.
  */
  listComics() {
    this.comicsService.getComics().subscribe(
      comicsList => {
        this.comics = comicsList.data.results.slice(this.sliceinit,this.sliceend);
        this.rareComic = comicsList.data.results[Math.floor(Math.random() * this.comics.length)];
        
        var random = Math.floor(Math.random() * this.comics.length);
      console.log(this.comics.slice(random, random + 2))
      console.log(this.comics)
      console.log(comicsList.data)


    });
  }

  loadMore(){
    this.sliceinit += 20;
    this.sliceend += 20;
    this.listComics();
    console.log(this.comics);
  }
}
