import { Component, ViewChild } from '@angular/core';
import { OnInit, ChangeDetectorRef } from '@angular/core'; 
import { MediaMatcher } from '@angular/cdk/layout'; 
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-valores';
   mobileQuery: MediaQueryList; 

   @ViewChild('sidenav') sidenav: MatSidenav;/*evento cierre de sidenav*/

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

/*fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
modificamos el listado de la barra de navegacion del ejemplo con nuestras rutas y con icon le agregamos los iconos que le
vamos a poner para tener estilo*/
  fillerNav=[
  {name:"Sobre mi", route:"/sobre-mi",icon:"home"},
  {name:"proyectos", route:"/proyectos",icon:"business"},
  {name:"crear-proyecto", route:"/crear-proyecto",icon:"business"},
  ];


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
