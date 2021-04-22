import { Component, OnInit } from '@angular/core';
import { Store } from "../services/store.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public store: Store)
  {
  }

  ngOnInit(): void
  {
    this.store.loadProducts()
      .subscribe();
  }

}
