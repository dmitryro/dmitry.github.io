import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideModule } from './modules/slide/slide.module';

import { MaterialSlideModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
