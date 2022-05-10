import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  products = [
    { id: 1, name: 'Product A', price: 200 },
    { id: 2, name: 'Product B', price: 300 },
    { id: 3, name: 'Product C', price: 400 },
  ];
  handleRemove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
  constructor() {}

  ngOnInit(): void {}
}
