import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WithDiscountComponent } from './components/with-discount/with-discount.component';
import { WithoutDiscountComponent } from './components/without-discount/without-discount.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'withdiscount', component: WithDiscountComponent },
      { path: 'withoutdiscount', component: WithoutDiscountComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },

  { path: 'posts', component: PostsComponent },
  {path: "comments/:id",component:CommentComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
