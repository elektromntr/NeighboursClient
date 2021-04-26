import { Type } from "./Type";

export class Product
{
    constructor(id: string, name: string, type: string){
        this.name = name;
        this.id = id;
        this.creationDate = new Date(); 
        this.editDate = new Date();
        this.type = new Type(type, type+"id");
        this.deleted = false;
        this.archive = false;
        this.grade = 0;
    }

    toString(){
        return `${this.name} created on ${this.creationDate.toUTCString()}`;
    }

    name!: string;
    type!: Type;
    id!: string;
    creationDate!: Date;
    editDate!: Date;
    archive!: boolean;
    deleted!: boolean;
    grade!: number;
}