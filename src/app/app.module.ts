import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutModule } from './shared/layout/layout.module';
import { InitComponent } from './features/home/init/init.component';
import { BookListComponentComponent } from './shared/book-list-component/book-list-component.component';
import { AuthInterceptor } from './core/AuthInterceptor';
import { BookRegisterComponent } from './features/home/book-register/book-register.component';
import { FormsModule } from '@angular/forms';
import { BookUpdateComponent } from './features/home/book-update/book-update.component';
import { AuthorListComponent } from './features/home/author-list/author-list.component';
import { AuthorRegisterComponent } from './features/home/author-register/author-register.component';
import { PublisherListComponent } from './features/home/publisher-list/publisher-list.component';
import { PublisherRegisterComponent } from './features/home/publisher-register/publisher-register.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    BookListComponentComponent,
    BookRegisterComponent,
    BookUpdateComponent,
    AuthorListComponent,
    AuthorRegisterComponent,
    PublisherListComponent,
    PublisherRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
