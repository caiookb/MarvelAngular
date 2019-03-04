import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  /**
  *Houve uma modificação na URL onde eu coloquei um limite e um offset, caso eu não fizesse isso, a marvel
  *por padrão envia os 20 primeiros comics, esses 20 primeiros muitos deles vem sem fotos, preço ou descrição.
  *Então para o projeto ficar mais agradável, coloquei um limite de 24 quadrinho em um offset de 1000, já que a API
  *fornece mais de 40.000 comics.
   */

  private url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=006e9fbaed5362ba1bfe67c9233287ac&hash=d73cae75ae9a051014e171efd07193a3&limit=24&offset=1000";

  constructor(private http: HttpClient) { }


  /**
  *Este método é responsável pela a captura dos dados pelo http
  */
  getComics(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
