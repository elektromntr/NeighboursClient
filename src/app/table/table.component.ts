import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  // providers: [LoggingService]
})
export class TableComponent implements OnInit
{
  products: Product[] = [];
  constructor(private logger: LoggingService, 
    private productService: ProductService)
  {
  }

  ngOnInit(): void
  {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    this.products.forEach(p => this.logger.logToConsole(p));
  }

  onProductSelection(productEl: Product){
    this.logger.logToConsole(productEl);
    alert(productEl.name);
  }
}