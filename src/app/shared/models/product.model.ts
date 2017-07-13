export class Product {
    id: string;
    name: string;
    pkwiu: string;
    unit: string;
    unitPrice: number;
    taxRate: number;

    constructor(data: any) {
        this.id = data._id;
        this.name = data.name;
        this.pkwiu = data.pkwiu;
        this.unit = data.unit;
        this.unitPrice = data.unitPrice;
        this.taxRate = data.taxRate;
    }
}