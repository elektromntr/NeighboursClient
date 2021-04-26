import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "../shared/Product";
import { LoggingService } from "./logging.service";

@Injectable()
export class Store
{
    constructor(private http: HttpClient)
    {
        
    }

    public products: Product[] = [];

    loadProducts(): Observable<void>
    {
        return this.http.get<[]>("https://neighbours.azurewebsites.net/Product/All")
            .pipe(map(data =>
            {
                this.products = data;
                console.log(data);
                return;
            }));
    }

    getProducts(){
        return this.products;
    }
}