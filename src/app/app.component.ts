import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular-project';
  constructor() { }
  @ViewChild (ProductsComponent) child!:ProductsComponent

  displayData(){
    this.child.renderValues();
  }
  
}