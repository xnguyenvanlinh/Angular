import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onHandleAdd = new EventEmitter();
  product: { name: string; price: number } = {
    name: '',
    price: 0,
  };
  handleAdd() {
    this.onHandleAdd.emit(this.product);
  }
  constructor() {}

  ngOnInit(): void {}
}
