import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  allDataOfProductsc = [
    {
      ID: 1,
      Name: 'iphone10',
      Quantity: 1,
      Price: 1000,
      Img: '../../../assets/products-img/nokia.jpg',
    },
    {
      ID: 2,
      Name: 'TV',
      Quantity: 2,
      Price: 5000,
      Img: '../../../assets/products-img/tv.jpg',
    },
    {
      ID: 3,
      Name: 'watch',
      Quantity: 2,
      Price: 2000,
      Img: '../../../assets/products-img/watch.jpg',
    },
  ];

  constructor() {}
  getAllProducts(): any {
    return this.allDataOfProductsc;
  }

  getProductById(prId: number): any {
    return this.allDataOfProductsc.filter((item) => {
      item.ID == prId;
    });
  }
}
