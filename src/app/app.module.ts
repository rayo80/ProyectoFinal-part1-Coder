import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';
import { AlumnoContentComponent } from './alumno-content/alumno-content.component';
import { JoinWordsPipe } from './custom/join-words.pipe';
import { JoinPipe } from './custom/join.pipe';
import { AumentarDirective } from './custom/aumentar.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    AlumnosFormComponent,
    AlumnosTableComponent,
    AlumnoContentComponent,
    JoinWordsPipe,
    JoinPipe,
    AumentarDirective
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
