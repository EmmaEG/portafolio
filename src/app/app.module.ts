import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';/*7 importamos del fichero app.routing.ts*/
import {MatSidenavModule} from '@angular/material/sidenav';/*10 importamos el modulo API de sidenav(Ang Material)*/
import {MatListModule} from '@angular/material/list';/*11 importamos el modulo lista para hacer una lista*/
import {MatToolbarModule} from '@angular/material/toolbar';/*12 importamos el modulo para toolboar*/
import {MatIconModule} from '@angular/material/icon';/*13 importamos el modulo lista para hacer un icono*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';/*14 se importó cuando instale angular material desde la consola*/
import { HttpClientModule } from '@angular/common/http';//51 importamos los modulos HTTP y de fomularios xq eso lo vamos a usar en todo momento para poder hacer las peticiones ajax
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MaterialFileInputModule } from 'ngx-material-file-input';

//modulos
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
//21 añadimos el component sidenav (22 cont en app.component.html)
/*verificamos que estan los componentes añadidos*/



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
    ],
  imports: [
    BrowserModule,
    routing,//8 cragamos el modulo routing en el imports 
    BrowserAnimationsModule,//15 se importó cuando instale angular material desde la consola
    MatSidenavModule,//16 importamos el modulo sidenav
    MatListModule,//17 importamos el modulo list
    MatToolbarModule,//18 importamos el modulo toolboard
    MatIconModule,//19 importamos el modulo para usar iconos
    HttpClientModule, //52 cargamos los modulos importados 
    FormsModule,//53 import del modulo y (54 continua en nuestro componente create src/app/component/create.component)
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    MaterialFileInputModule
  ],
  providers: [
    appRoutingProviders//9 cargamos Routing, aquí es donde se cargan los servicios (10 continua)
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

/*20 desde la consola gneramos el componente sidenav con ng g component components/sidenav*/