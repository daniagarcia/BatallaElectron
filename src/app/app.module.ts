import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableroComponent } from './Componentes/tablero/tablero.component';
import { RouterModule, Routes } from '@angular/router';
const routes :Routes = [
  {path:'Tablero', component: TableroComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
