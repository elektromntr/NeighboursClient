import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Store } from "../services/store.service";
import { Product } from '../shared/Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit
{
  products: Product[] = this.store;

  constructor(public store: Store)
  {
  }

  ngOnInit(): void
  {
    this.store.loadProducts()
      .subscribe();
  }

}
