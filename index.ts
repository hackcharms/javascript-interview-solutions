import { PaymentService } from "./design-patterrs/factory/services/PaymentService";

const paymentService= new PaymentService();
const defaultPayment=paymentService.getProvider();
const stripe=paymentService.getProvider('stripe');
console.log('default getProvider',defaultPayment.name)
console.log('getProvider',stripe.name)
stripe.credit(10);