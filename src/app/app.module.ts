import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { Store } from "./services/store.service";
import { ProductComponent } from './product/product.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { LoggingService } from './services/logging.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ProductComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Store,
    LoggingService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
