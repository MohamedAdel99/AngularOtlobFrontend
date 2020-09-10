import { RestPayload } from "../restaurants/rest-payload";
export class OrderPl {
oid: number;
quantity: number;
totalAmount: number;
details:string;
rest:RestPayload;
cust:any;
contents:string;
}