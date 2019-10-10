import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeliComponent } from './components/deli/deli.component';
import { GrillComponent } from './components/grill/grill.component';


const routes: Routes = [{
  path : 'home/deli',
  component: DeliComponent
},{
  path : 'home/grill',
  component: GrillComponent
},{
  path : '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
