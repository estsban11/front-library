import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { InitComponent } from './features/home/init/init.component';
import { BookRegisterComponent } from './features/home/book-register/book-register.component';
import { BookUpdateComponent } from './features/home/book-update/book-update.component';
import { AuthorListComponent } from './features/home/author-list/author-list.component';
import { AuthorRegisterComponent } from './features/home/author-register/author-register.component';
import { PublisherRegisterComponent } from './features/home/publisher-register/publisher-register.component';
import { PublisherListComponent } from './features/home/publisher-list/publisher-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path:'home',
    component:MainLayoutComponent,
    children:[
      {path:'',component:InitComponent},
      {path:'register-book',component:BookRegisterComponent},
      {path:'update-book/:id',component:BookUpdateComponent},
      {path:'author-list',component:AuthorListComponent},
      {path:'author/new',component:AuthorRegisterComponent},
      {path:'author/update/:id',component:AuthorRegisterComponent},
      {path:'publisher-list',component:PublisherListComponent},
      {path:'publisher/new',component:PublisherRegisterComponent},
      {path:'publisher/update/:id',component:PublisherRegisterComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
