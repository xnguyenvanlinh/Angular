import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product!: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private routes: Router
  ) {}
  id!: string;
  defaultFileList: NzUploadFile[] = [];
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.get(this.id).subscribe((data) => {
      this.product = data;
      this.defaultFileList = data.images.map((image, index) => {
        return {
          uid: `-${index + 1}`,
          name: `anh${index + 1}.webp`,
          status: 'done',
          url: image,
          thumbUrl: image,
        };
      });
    });
  }
  updateProduct() {
    this.productService.update(this.product).subscribe(() => {
      this.routes.navigate(['admin/product']);
    });
  }
}
