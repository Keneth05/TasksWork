import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendientesComponent } from './Pendientes/pages/pendientes/pendientes.component';
import { CompletadasComponent } from './Completadas/pages/completadas/completadas.component';
import { Error404Component } from './General/pages/error404/error404.component';
import { AcercaComponent } from './General/pages/acerca/acerca.component';
import { DetallesComponent } from './General/pages/detalles/detalles.component';

const routes: Routes = [

  {
    path:'Pendientes',
    component:PendientesComponent
  },
  {
    path:'Completadas',
    component:CompletadasComponent
  },
  {
    path:'Acerca',
    component:AcercaComponent
  },
  {
    path: 'task/:id', 
    component: DetallesComponent
  },
  {
    path:'',
    component:CompletadasComponent
  },
  {
    path:'**',
    component: Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
