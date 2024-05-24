import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FordComponent } from './ford/ford.component';
import { AudiComponent } from './audi/audi.component';
import { FiatComponent } from './fiat/fiat.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'ford',
    component: FordComponent,
    title: 'Ford',
  },
  {
    path: 'audi',
    component: AudiComponent,
    title: 'Audi',
   },
   {
    path: 'fiat',
    component: FiatComponent,
    title: 'Fiat',
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
