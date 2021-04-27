import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './shared/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'NeighboursClient';
  selectedProduct!: Product;

  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    this.productService.productSelected
      .subscribe(
        (data: Product) =>
          {
            this.selectedProduct = data;
          }
      );
  }
}
