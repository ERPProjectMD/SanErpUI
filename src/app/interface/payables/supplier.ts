import { base } from "../base";

export interface Supplier extends base {
    supplierId: number;
    name: string;
    shortName: string;
    contactPerson: string;
    phoneNumber: string;
    fax: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    isActive: boolean;
}

