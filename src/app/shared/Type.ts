export class Type
{
    constructor(name: string, id: string){
        this.name = name;
        this.id = id;
        this.creationDate, this.editDate = new Date();
        this.archive, this.deleted = false;
        this.grade = 0;
    }
    name!: string;
    id!: string;
    creationDate!: Date;
    editDate!: Date;
    archive!: boolean;
    deleted!: boolean;
    grade!: number;
}