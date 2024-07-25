import { PaymentGatewayInterface } from "../interfaces/PaymentGatewayInterface";
import { AbstractPaymentGateway } from "./AbstractPaymentGateway";

export class StripePaymentGateway extends AbstractPaymentGateway{
    protected provider: string='stripe';
}