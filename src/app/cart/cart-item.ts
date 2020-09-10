import {RestPayload} from "../restaurants/rest-payload";
export class CartItem {
  id: number;
  name: string;
  category: string;
  qty: number;
  price: number;
  rest:RestPayload;

  constructor(id: number, name: string,category: string, qty: number,price: number,Rid: number) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.price = price;
    this.category=this.category;
    rest: new RestPayload(Rid,"","","","","");
  }
}