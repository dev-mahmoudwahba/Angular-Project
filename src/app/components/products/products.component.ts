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

  public discount: DiscountOffers;
  public storeName: string;
  public storeLogo: string;
  public productList: IProduct[];
  public categoryList: ICategory[];
  public clientName: string;
  public isPurshased: boolean;
  public productElement: IProduct = {
    ID: 1,
    Name: "iphone10",
    Quantity: 1,
    Price: 1000,
    Img: "text"
  }
  public categoryElement: ICategory = {
    ID: 1,
    Name: "phones"
  }
  constructor() {
    this.discount = DiscountOffers.maxdiscount
    this.storeName = "Eldawlya Store"
    this.storeLogo = "../../../assets/icons/2.png"
    this.productList = [this.productElement]
    this.categoryList = [this.categoryElement]
    this.clientName = "hamasa"
    this.isPurshased = true
  }

  ngOnInit(): void {
  }

}
