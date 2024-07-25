import {PaymentFactory} from "../factory";
import { PaymentGatewayInterface } from "../interfaces/PaymentGatewayInterface";
import { PaymentGatewayType } from "../types";

export class PaymentService {
    getProvider(paymentGateway?: PaymentGatewayType):PaymentGatewayInterface{
        return new PaymentFactory().connectPaymentGateway(paymentGateway);
    }
}