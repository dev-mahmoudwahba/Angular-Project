import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeName: string;

  constructor() {
    this.storeName = "Eldawlya Store"   }

  ngOnInit(): void {
  }

  
}
