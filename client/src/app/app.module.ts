import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutomovilesListComponent } from './components/automoviles-list/automoviles-list.component';
import { AutomovilesFormComponent } from './components/automoviles-form/automoviles-form.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutomovilesListComponent,
    AutomovilesFormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
