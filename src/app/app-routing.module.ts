import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { MenuComponent } from './menu/menu.component';
import { ComicsRareComponent } from './comics-rare/comics-rare.component';
import { ComicsRareDetailsComponent } from './comics-rare-details/comics-rare-details.component';
import { HomeComponent } from './home/home.component';

  /**
  Constante com os caminhos para cada componente.
  */
   const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'rares', component: ComicsRareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  /**
  Constante com todos os componentes para pôr nas declarações
  */
export const routingComponents = 
[ComicsListComponent, 
 ComicsRareComponent,
 ComicsDetailsComponent, 
 ComicsRareDetailsComponent,
 HomeComponent,
 MenuComponent
];


