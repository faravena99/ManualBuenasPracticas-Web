//ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { InstalacionComponent } from './components/instalacion/instalacion.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { PipeProyectComponent } from './components/pipe-proyect/pipe-proyect.component';
import { ManualtsComponent } from './components/manualts/manualts.component';
//RUTAS
import { AppRoutingModule } from './app-routing.module';

//PIPES
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

//SIDEBAR
import { Sidebar2Component } from './components/shared/sidebar2/sidebar2.component';
import { SidebarModule } from 'ng-sidebar';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    InstalacionComponent,
    BuenasPracticasComponent,
    DomseguroPipe,
    PipeProyectComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    ManualtsComponent,
    HomeComponent,
    Sidebar2Component,
    NewsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
