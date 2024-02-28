import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CalificacionesComponent } from './component/calificaciones/calificaciones.component';
import { MateriasComponent } from './component/materias/materias.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { MaestroComponent } from './component/maestro/maestro.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CalificacionesComponent,
    MateriasComponent,
    AlumnosComponent,
    MaestroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
