export class BankAccount {
    id: string;
    bank: string;
    account: string;

    constructor(data: any) {
        this.id = data._id;
        this.bank = data.bank;
        this.account = data.account;
    }
}
