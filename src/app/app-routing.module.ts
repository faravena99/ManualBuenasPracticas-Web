import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { HomeComponent } from './components/home/home.component';
import { InstalacionComponent } from './components/instalacion/instalacion.component';
import { ManualtsComponent } from './components/manualts/manualts.component';
import { NewsComponent } from './components/news/news.component';
import { PipeProyectComponent } from './components/pipe-proyect/pipe-proyect.component';

const routes: Routes = [
  
      { path: 'home', component: HomeComponent },
      { path: 'instalacion', component: InstalacionComponent },
      { path: 'buenasPracticas', component: BuenasPracticasComponent},
      { path: 'news', component: NewsComponent},
      { path: 'pipes', component: PipeProyectComponent },
      { path: 'manualts', component: ManualtsComponent },
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: HomeComponent },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
