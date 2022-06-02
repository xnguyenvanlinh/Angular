import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models';
import { ProductService } from 'src/app/services/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  constructor(
    private productService: ProductService,
    private nzMessageService: NzMessageService
  ) {}
  listProduct!: IProduct[];
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.list().subscribe((data) => {
      this.listProduct = data;
    });
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  confirm(id: string): void {
    this.productService.destroy(id).subscribe(() => {
      this.getProduct();
    });
    this.nzMessageService.info('Xoá thành công');
  }
  expandSet = new Set<any>();
  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
