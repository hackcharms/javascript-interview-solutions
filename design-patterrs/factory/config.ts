import { PaypalPaymentGateway, StripePaymentGateway } from "./gateways";
import { PaymentGatewayInterface } from "./interfaces/PaymentGatewayInterface";
import { PaymentGatewayType } from "./types";
export class Config{
    GATEWAY:PaymentGatewayType='paypal';   
    paymentGateways:Record<PaymentGatewayType,PaymentGatewayInterface>={
       'paypal': new PaypalPaymentGateway,
       'stripe': new StripePaymentGateway,
   }
    paymentGateway(gateway:PaymentGatewayType=this.GATEWAY){
    if(! (this.GATEWAY in this.paymentGateways)){
        throw Error('Payment gateway not found, please make sure you registered it.')
    }
    return this.paymentGateways[gateway];
   }
}
