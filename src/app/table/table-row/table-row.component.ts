import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/services/store.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void
  {
    
  }

}
