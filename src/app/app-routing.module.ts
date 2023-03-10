import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AllComponent } from './components/observable/all/all.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { MapComponent } from './components/map/map.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { SwitchmapComponent } from './components/switchmap/switchmap.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'interval',component:IntervalComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:'',component:AllComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'map',component:MapComponent}
  ]},
  {path:'map',component:MapComponent},
  {path:'pluck',component:PluckComponent},
  {path:'switchmap',component:SwitchmapComponent},
  {path:'switchmap/search',component:SwitchmapComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
