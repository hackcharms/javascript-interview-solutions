import { PaymentGatewayType } from '../types/index.js'
import type { PaymentGatewayInterface } from './PaymentGatewayInterface.ts'
export interface PaymentFactoryInterface{
    connectPaymentGateway (paymentGateway?:PaymentGatewayType):PaymentGatewayInterface 
}