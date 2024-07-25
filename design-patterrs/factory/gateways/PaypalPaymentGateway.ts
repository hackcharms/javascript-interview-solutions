import { PaymentGatewayInterface } from "../interfaces/PaymentGatewayInterface";
import { AbstractPaymentGateway } from "./AbstractPaymentGateway";

export class PaypalPaymentGateway extends AbstractPaymentGateway{
    protected provider: string='paypal';
}