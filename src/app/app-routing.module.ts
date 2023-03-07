import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GeneroPage } from '../app/genero/genero.page';
import { HttpClientModule } from '@angular/common/http';
import { ClimaPage } from '../app/clima/clima.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'herramienta',
    pathMatch: 'full'
  },
  
  {
    path: 'herramienta',
    loadChildren: () => import('./herramienta/herramienta.module').then( m => m.HerramientaPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'edad',
    loadChildren: () => import('./edad/edad.module').then( m => m.EdadPageModule)
  },
  {
    path: 'universidad',
    loadChildren: () => import('./universidad/universidad.module').then( m => m.UniversidadPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },

 
  

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
export class GeneroPageRoutingModule {}