import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Store } from "../services/store.service";
import { Product } from '../shared/Product';
import { Type } from '../shared/Type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit
{
  products: Product[] = [];

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
    this.store.loadProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
    this.products = this.store.getProducts();
  }
}