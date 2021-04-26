import { Injectable } from "@angular/core";
import { Product } from "../shared/Product";
import { LoggingService } from "./logging.service";

@Injectable()
export class ProductService{
    products: Product[] = [
            new Product("123", "Testowy 1", "typ1"),
            new Product("456", "Testowy 2", "typ2"),
            new Product("789", "Testowy 3", "typ3"),
    ]

    constructor(private logging: LoggingService){

    }

    addProduct(name: string, id: string, type: string){
        this.products.push(new Product(id, name, type));
        this.logging.logToConsole("Product added: "+name);
    }
}