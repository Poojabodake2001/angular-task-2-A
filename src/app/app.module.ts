import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAComponent } from './form-a/form-a.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBComponent } from './form-b/form-b.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAComponent,
    FormBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
