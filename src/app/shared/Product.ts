import { Type } from "./Type";

export class Product
{
    name!: string;
    type!: Type;
    id!: string;
    creationDate!: Date;
    editDate!: Date;
    archive!: boolean;
    deleted!: boolean;
    grade!: number;
}