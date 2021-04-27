import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() selectedProduct!: Product;

  constructor(private ProductService: ProductService)
  {
    
  }

  ngOnInit(): void {
    // this.ProductService.productSelected
    //   .subscribe(
    //     (data: Product) => {
    //         this.selectedProduct = data
    //       }
    //   );
  }

}
