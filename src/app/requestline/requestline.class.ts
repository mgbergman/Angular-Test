import { Product } from 'src/app/product/product.class';
import { Request } from 'src/app/request/request.class';

export class RequestLine {
    id: number = 0;
    request:  Request = null;
    product: Product = null;
    quantity:   number = 1;

    constructor() {
    }

}