import { Config } from './../config';
import { PaymentFactoryInterface } from "../interfaces/PaymentFactoryInterface";
import { PaymentGatewayInterface } from "../interfaces/PaymentGatewayInterface";
import { PaymentGatewayType } from '../types';
export class PaymentFactory implements PaymentFactoryInterface{
    connectPaymentGateway (paymentGateway?:PaymentGatewayType):PaymentGatewayInterface {
        return (new Config()).paymentGateway(paymentGateway);
    };
}