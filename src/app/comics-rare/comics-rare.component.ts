import {  Component,  OnInit, Input} from '@angular/core';
import {  ComicsService} from '../services/comics.service';
import {  Comics} from '../models/comics';
import {  Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-comics-rare',
  templateUrl: './comics-rare.component.html',
  styleUrls: ['./comics-rare.component.css']
})
export class ComicsRareComponent implements OnInit {

  /**
  * O Input especifica quais propriedades podemos definir em um componente.
  */
  @Input() 
  comics: Comics[] = [];
  selectedComics: Comics;

  /**
  É onde ocorre as injeções de dependência, para que possa utilizar dos métodos.
  */
  constructor(private comicsService: ComicsService, private router: Router) {}
 
  /**
  ngOnInit ele é carregado assim que um componente inicia, então coloquei os métodos.
  de forma organizada aqui
  */  
  ngOnInit() {
    this.getRareComics();
    this.hide();
    this.show();
    this.scrollTop();
  }

  /*
  Método responsável por definir o Comic que foi selecionado, para 
  posteriormente exibir nos detalhes.
  */
  onSelect(comic: Comics): void {
    this.selectedComics = comic;
  }

  /** 
  Método responsável por tratar os dados e exibir o array dos Comics.
  */
  getRareComics() {
    this.comicsService.getComics().subscribe(
      comicsList => {
        this.comics = comicsList.data.results;
      });
  }

  /** 
  Método com função em jQuery que faz um slide up, ocultando a <div> dos 
  detalhes dos Comics.
  */
  hide() {
    $(document).ready(function () {
      $(document).on("click", "#rslideUp", function () {
        $('#rcdetail').slideUp().fadeOut();
      });
    });
  }

  /** 
  Método com função em jQuery que faz um slide down, permitindo exibir a <div> dos 
  detalhes dos Comic.
  */
  show() {
    $(document).ready(function () {
      $(document).on("click", "#rimg", function () {
        $('#rcdetail').slideDown();
      });
    });
  }

  /**
  Método com função em jQuery que faz com que a página faça um scroll para a <div>
  dos detalhes dos Comics de forma automática.
   */
  scrollTop() {
    $(document).ready(function () {
      $(document).on("click", "#rimg", function () {
        $("html").animate({ 
          scrollTop: ($('#rcdetail').offset().top)});
          });
    });
  }
}
