import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() data!: string;
  products: {
    id: number;
    img: string;
    name: string;
    price: number;
    status: boolean;
  }[] = [
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
  name: string = '';
  price: number = 0;
  id = 0;
  handleAdd() {
    this.products.push({
      id: this.products.length,
      name: this.name,
      price: this.price,
      status: true,
      img: 'https://picsum.photos/50/50',
    });
    this.name = '';
    this.price = 0;
  }
  isShow: boolean = true;
  setShow() {
    this.isShow = !this.isShow;
  }
  setValueEdit(id: number) {
    const [productOld] = this.products.filter((product) => product.id === id);
    this.name = productOld.name;
    this.price = productOld.price;
    this.id = productOld.id;
  }
  handleEdit() {
    const { id } = this;
    this.products = this.products.map((product) =>
      product.id === id
        ? {
            ...product,
            name: this.name,
            price: this.price,
          }
        : product
    );
  }
  handleRemove(id: number) {
    if (window.confirm('Bạn có muốn xoá không ? '))
      this.products = this.products.filter((product) => product.id !== id);
  }
  constructor() {}

  ngOnInit(): void {}
}
