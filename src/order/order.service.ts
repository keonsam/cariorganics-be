import {OrderInput} from "./dto/order.input";
import {Order} from "./dto/order";
import {v4 as uuid} from "uuid";
import {Injectable} from "@nestjs/common";
import {Observable, of} from "rxjs";

@Injectable()
export class OrderService {
    addOrder(orderData: OrderInput): Observable<Order> {
        const id = uuid();
        return of(new Order(id, orderData.orders));
    }
}
