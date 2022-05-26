import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onHandleAdd = new EventEmitter();
  product: IProduct = {
    id: '',
    name: '',
    price: 0,
    quantity: '',
    desc: '',
    categoryId: '',
    images: [],
  };
  constructor(private router: Router, private productService: ProductService) {}
  handleAdd() {
    // this.onHandleAdd.emit(this.product);
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['admin/product']);
    });
  }
  ngOnInit(): void {
    console.log(this.product);
  }
}
