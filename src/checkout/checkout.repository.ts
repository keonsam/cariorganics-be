import {Injectable} from "@nestjs/common";
import {Observable, of} from "rxjs";
import {CheckoutDto} from "./dto/checkout.dto";
import {v4 as uuid} from "uuid";

@Injectable()
export class CheckoutRepository {
    addCheckout(checkout: CheckoutDto): Observable<CheckoutDto> {
        checkout.checkoutId = uuid();
        return of(checkout);
    }
}
