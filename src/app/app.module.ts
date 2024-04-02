import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonenumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
