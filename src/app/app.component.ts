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


  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
  }
}
