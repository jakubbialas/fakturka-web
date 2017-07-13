export class Customer {
    id: string;
    name: string;
    nip: string;
    street: string;
    zip: string;
    city: string;

    constructor(data: any) {
        this.id = data._id;
        this.name = data.name;
        this.nip = data.nip;
        this.street = data.street;
        this.zip = data.zip;
        this.city = data.city;
    }
}
