import { Type } from "./Type";

export class Product
{
    constructor(id: string, name: string, type: string){
        this.name = name;
        this.id = id;
        this.creationDate, this.editDate = new Date();
        this.type = new Type(type, type+"id");
        this.deleted, this.archive = false;
        this.grade = 0;
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