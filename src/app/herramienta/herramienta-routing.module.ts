import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientaPage } from './herramienta.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientaPageRoutingModule {}
