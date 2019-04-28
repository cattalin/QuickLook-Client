import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedDataService } from '@app/services/mocked-data.service';

import { HomePageComponent } from './pages/homepage/homepage.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
    ),
    InMemoryWebApiModule.forRoot(MockedDataService)
  ],
  declarations: [
    HomePageComponent,
    ResultsPageComponent,
    NotFoundPageComponent,
    
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    SearchResultComponent,
    SearchResultsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
