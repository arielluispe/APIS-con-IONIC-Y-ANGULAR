import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientaPageRoutingModule } from './herramienta-routing.module';

import { HerramientaPage } from './herramienta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientaPageRoutingModule
  ],
  declarations: [HerramientaPage]
})
export class HerramientaPageModule {}
