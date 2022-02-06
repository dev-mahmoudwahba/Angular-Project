import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Shared Classes and types/interfaces/IProduct';
import { ICategory } from '../../Shared Classes and types/interfaces/ICategory';
import { DiscountOffers } from '../../Shared Classes and types/enums/DiscountOffers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   discount: DiscountOffers;
   storeName: string;
   storeLogo: string;
   productList: IProduct[];
   categoryList: ICategory[];
   clientName: string;
   isPurshased: boolean;

   onBuyClicked():any{
    this.isPurshased=!this.isPurshased;
    
   }

  constructor() {
    this.discount = DiscountOffers.nodiscount
    this.storeName = "Eldawlya Store"
    this.storeLogo = "../../../assets/icons/2.png"
    this.clientName = "hamasa"
    this.isPurshased = false

    this.productList = [  {
      ID: 1,
      Name: "iphone10",
      Quantity: 1,
      Price: 1000,
      Img: "../../../assets/products-img/nokia.jpg"
    }, {
      ID: 2,
      Name: "TV",
      Quantity: 2,
      Price: 5000,
      Img: "../../../assets/products-img/tv.jpg"
    },
    {
      ID: 3,
      Name: "watch",
      Quantity: 2,
      Price: 2000,
      Img: "../../../assets/products-img/watch.jpg"
    }
  
  
  ]
  
  
    this.categoryList = [
      {
        ID: 1,
        Name: "phones",
      },
      {
        ID: 2,
        Name: "TVs",
      },
      {
        ID: 3,
        Name: "watches"
      }
    ]
  
  }

  ngOnInit(): void {
  }

}
