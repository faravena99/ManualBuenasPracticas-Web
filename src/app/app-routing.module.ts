import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { HomeComponent } from './components/home/home.component';
import { InstalacionComponent } from './components/instalacion/instalacion.component';

const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'instalacion', component: InstalacionComponent},
  {path:'buenasPracticas', component: BuenasPracticasComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
