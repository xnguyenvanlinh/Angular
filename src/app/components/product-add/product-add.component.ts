import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import axios from 'axios';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onHandleAdd = new EventEmitter();
  defaultFileList: NzUploadFile[] = [];
  product: IProduct = {
    id: '',
    name: '',
    price: 0,
    quantity: '',
    desc: '',
    categoryId: '',
    images: [],
  };
  fileUpload: any;
  constructor(private router: Router, private productService: ProductService) {}
  async handleAdd() {
    this.fileUpload = this.defaultFileList.map(({ originFileObj }) => {
      return {
        originFileObj,
      };
    });
    const files = [...this.fileUpload];
    const imageGallery = [];
    const CLOUDINARY_API =
      'https://api.cloudinary.com/v1_1/xnguyenvanlinh/image/upload';
    for (const file of files) {
      const formData = new FormData();
      const { originFileObj } = file;
      formData.append('file', originFileObj);
      formData.append('upload_preset', 'linhnvph13162');

      const { data } = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          'Content-Type': 'application/form-data',
        },
      });
      imageGallery.push(data.url);
    }
    this.product = { ...this.product, images: imageGallery };
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['admin/product']);
    });
  }
  ngOnInit(): void {}
}
