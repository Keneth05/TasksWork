import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './General/General.module';
import { PendientesComponent } from './Pendientes/pages/pendientes/pendientes.component';
import { CompletadasComponent } from './Completadas/pages/completadas/completadas.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PendientesComponent,
    CompletadasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GeneralModule

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
