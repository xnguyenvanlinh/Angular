import { Component } from '@angular/core';
import { IProduct } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Web208';
  products: any = [
    {
      id: 1,
      img: 'https://picsum.photos/50/50',
      name: 'Product A',
      price: 200,
      status: true,
    },
    {
      id: 2,
      img: 'https://picsum.photos/50/50',
      name: 'Product B',
      price: 300,
      status: false,
    },
    {
      id: 3,
      img: 'https://picsum.photos/50/50',
      name: 'Product C',
      price: 400,
      status: true,
    },
  ];
  addProduct(product: any) {
    this.products.push({
      ...product,
      img: 'https://picsum.photos/50/50',
      status: Boolean(Math.round(Math.random())),
    });
  }
}
