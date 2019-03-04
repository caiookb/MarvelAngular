import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Comics } from '../models/comics';
import { ComicsService } from '../services/comics.service';

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
  selectedComic: Comics;

  /**
  É onde ocorre as injeções de dependência, para que possa utilizar dos métodos.
  */  constructor(private comicsService: ComicsService, private router: Router) {}

  /**
  ngOnInit ele é carregado assim que um componente inicia, então coloquei os métodos.
  de forma organizada aqui
  */  
  ngOnInit() {
    this.listComics();
    this.hide();
    this.show();
    this.scrollTop();
  }

  /*
  Método responsável por definir o Comic que foi selecionado, para 
  posteriormente exibir nos detalhes.
  */
  onSelect(comic: Comics): void {
    this.selectedComic = comic;
  }

  /** 
  Método responsável por tratar os dados e exibir o array dos Comics.
  */
  listComics() {
    this.comicsService.getComics().subscribe(
      comicsList => {
        this.comics = comicsList.data.results;
        console.log(this.comics);
      });
  }

  /** 
  Método com função em jQuery que faz um slide up, ocultando a <div> dos 
  detalhes dos Comics.
  */
  hide() {
    $(document).ready(function () {
      $(document).on("click", "#slideUp", function () {
        $('#cdetail').slideUp();
      });
    });
  }

  /** 
  Método com função em jQuery que faz um slide down, permitindo exibir a <div> dos 
  detalhes dos Comic.
  */
  show() {
    $(document).ready(function () {
      $(document).on("click", "#img", function () {
        $('#cdetail').slideDown();

      });
    });
  }

  /**
  Método com função em jQuery que faz com que a página faça um scroll para a <div>
  dos detalhes dos Comics de forma automática.
   */
  scrollTop() {
    $(document).ready(function () {
      $(document).on("click", "#img", function () {
        $("html").animate({ 
          scrollTop: ($('#cdetail').offset().top)});
      });
    });
  }



}
