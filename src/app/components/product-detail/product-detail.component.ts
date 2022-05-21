import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public id: any;
  // @Input('data') productDetail!: Product;
  productDetail!: IProduct;
  productDetail2!: any;
  constructor(
    private routes: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.routes.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');
    this.productService.get(this.id).subscribe((data) => {
      this.productDetail = data;
    });
    this.productDetail2 = data.find((item) => item.id == +this.id)!;
  }
  getProduct() {
    console.log(this.productDetail);
  }
}
