import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TarjetaTaskComponent } from './components/tarjeta-task/tarjeta-task.component';
import { Error404Component } from './pages/error404/error404.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

@NgModule({
declarations: [
    NavBarComponent,
    TarjetaTaskComponent,
    Error404Component,
    AcercaComponent,
    DetallesComponent

],
imports: [
    CommonModule,
    RouterModule
],
exports:[
    NavBarComponent,
    TarjetaTaskComponent

]
})

export class GeneralModule { }