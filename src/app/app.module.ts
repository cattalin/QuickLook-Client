import { GlobalService } from './services/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PreviewModalComponent } from './components/preview-modal/preview-modal/preview-modal.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:searchedContent', component: ResultsPageComponent },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
    ),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
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
    PaginationComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PreviewModalComponent,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
