import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './audi/audi.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: "audi",
    component: AudiComponent
  },
  {
    path: "fiat",
    component: FiatComponent
  },
  {
    path:"ford",
    component: FordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
