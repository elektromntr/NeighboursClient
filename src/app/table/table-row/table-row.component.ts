import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }


  ngOnInit(): void
  {
    // this.store.loadProducts()
    //   .subscribe();
    console.log('table-row');
  }

}
