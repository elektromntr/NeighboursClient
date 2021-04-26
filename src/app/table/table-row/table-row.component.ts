import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ProductService } from 'src/app/services/product.service';
//import { Store } from 'src/app/services/store.service';
import { Product } from 'src/app/shared/Product';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() product!: Product;

  // constructor(public store: Store) { }
  constructor(private logger: LoggingService, 
    private productService: ProductService) { }


  ngOnInit(): void
  {
    this.logger.logToConsole("Row created for: " + this.product.name);
  }

}
