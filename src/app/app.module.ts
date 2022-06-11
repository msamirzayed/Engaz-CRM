import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot(),
  NgHttpLoaderModule.forRoot(),
];

const COMPONENTS = [AppComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [...COMPONENTS],
})
export class AppModule {}
