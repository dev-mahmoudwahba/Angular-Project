import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IProduct } from '../../Shared Classes and types/interfaces/IProduct';
import { ICategory } from '../../Shared Classes and types/interfaces/ICategory';
import { DiscountOffers } from '../../Shared Classes and types/enums/DiscountOffers';
import { ProductServiceService } from 'src/app/Services/product-service.service';

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
    @Output() childEvent = new EventEmitter()
   
  constructor(private proService:ProductServiceService) {
    this.discount = DiscountOffers.nodiscount
    this.storeName = "Eldawlya Store"
    this.storeLogo = "../../../assets/icons/2.png"
    this.clientName = "hamasa"
    this.isPurshased = false



  this.productList = proService.getAllProducts()
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
renderValues():any{
 return this.proService.getAllProducts()
}
  ngOnInit(): void {
  }

}
