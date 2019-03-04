import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 

  ngOnInit(){
    this.moveBackground();
  }

  /**
   * Função em jQuery para deixar o background interativo com o mousemove.
   */
  moveBackground(){
    $('body').mousemove(function (e) {
      var moveX = (e.pageX * -0.01);
      var moveY = (e.pageY * -0.01);
      $(this).css('background-position', moveX + 'px ' + moveY + 'px');
  });
  }
}
