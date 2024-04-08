import { Component } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../service/productservice';


@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  {
  products!: Product[];

  constructor(private ProductService: ProductService) {}

  ngOnInit() {
      this.ProductService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}