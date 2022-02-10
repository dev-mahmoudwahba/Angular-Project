import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WithDiscountComponent } from './components/with-discount/with-discount.component';
import { WithoutDiscountComponent } from './components/without-discount/without-discount.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommentComponent } from './components/comment/comment.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    WithDiscountComponent,
    WithoutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
