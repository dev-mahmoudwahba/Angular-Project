import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IProduct } from '../../Shared Classes and types/interfaces/IProduct';
import { ICategory } from '../../Shared Classes and types/interfaces/ICategory';
import { DiscountOffers } from '../../Shared Classes and types/enums/DiscountOffers';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  show:boolean = true;
   onBuyClicked():any{
    this.isPurshased=!this.isPurshased;
   }
   
  constructor(private proService:ProductServiceService,private router:Router,private activatedroute:ActivatedRoute) {
    this.discount = DiscountOffers.middiscount
    this.storeName = "Eldawlya Store"
    this.storeLogo = "../../../assets/icons/2.png"
    this.clientName = "hamasa"
    this.isPurshased = true



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

  this.proService.getAllProducts()
  this.show = !this.show
}
  ngOnInit(): void {
  }
  @ViewChild (ProductsComponent) child!:ProductsComponent

  displayData(){
    this.child.renderValues();
  }

  goToDicountComponent(){
    this.router.navigate(["withdiscount"],{relativeTo:this.activatedroute})
  }

  goToWithoutDicountComponent(){
    this.router.navigate(["withoutdiscount"],{relativeTo:this.activatedroute})
  }


}
