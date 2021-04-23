import { Component, OnInit } from '@angular/core';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public store: Store)
  {
    
  }

  ngOnInit(): void {
  }

}
