import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ListItemInfoComponent } from './list-item-info/list-item-info.component';
import { PNfComponent } from './p-nf/p-nf.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'item', component: ListItemInfoComponent
  },
  {
    path: '**', component: PNfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
