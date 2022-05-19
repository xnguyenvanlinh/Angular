import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public id: any;
  // @Input('data') productDetail!: Product;
  productDetail!: any;
  constructor(
    public routes: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');
    this.productService.get(this.id).subscribe((data) => {
      this.productDetail = data;
    });
  }
  getProduct() {
    console.log(this.productDetail);
  }
}
