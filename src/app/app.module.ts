import { TokenInterceptor } from './services/auth-interceptor.service';
import { GlobalService } from './services/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './pages/homepage/homepage.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PreviewModalComponent } from './components/preview-modal/preview-modal/preview-modal.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { AdvancedSearchStore } from './services/advanced-search.store.service';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:searchedContent', component: ResultsPageComponent },
  { path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuardService] },
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
    ToastrModule.forRoot(),
    MobxAngularModule,
  ],
  declarations: [
    HomePageComponent,
    ResultsPageComponent,
    NotFoundPageComponent,

    AppComponent,
    NavbarComponent,
    SearchResultComponent,
    SearchResultsComponent,
    PaginationComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PreviewModalComponent,
    SafeUrlPipe,
    SafeHtmlPipe,
    SpinnerComponent,
    AdvancedSearchComponent,
    BookmarksComponent,
  ],
  providers: [GlobalService, AdvancedSearchStore, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
