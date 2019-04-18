import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataService } from 'app/services/data.service';

import { HomePageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
