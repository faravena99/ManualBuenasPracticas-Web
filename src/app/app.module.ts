//ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//COMPONENTS
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { InstalacionComponent } from './components/instalacion/instalacion.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { ProyectoHeroesComponent } from './components/proyecto-heroes/proyecto-heroes.component';
import { PipeProyectComponent } from './components/pipe-proyect/pipe-proyect.component';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//PIPES
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TarjetasComponent,
    InstalacionComponent,
    BuenasPracticasComponent,
    DomseguroPipe,
    ProyectoHeroesComponent,
    PipeProyectComponent,
    CapitalizadoPipe,
    ContrasenaPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
