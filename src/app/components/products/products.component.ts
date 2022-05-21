import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // @Input('data') products!: Product[];
  loading: boolean = true;
  products: IProduct[] = [];
  constructor(
    public routes: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService.list().subscribe((data) => {
      this.loading = false;
      this.products = data;
    });
  }
  removeProduct(id: string) {
    if (window.confirm('Bạn có muốn xoá không '))
      this.productService.destroy(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
  }
}
