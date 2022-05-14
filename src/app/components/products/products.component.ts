import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input('data') products!: Product[];

  constructor() {}
  productDetail!: Product;
  showDetail(id: number) {
    this.productDetail = this.products.find((product) => product.id === id)!;
  }
  ngOnInit(): void {}
}
