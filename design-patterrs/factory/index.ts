import { PaymentService } from "./services/PaymentService";

const paymentService= new PaymentService();
console.log('getProvider',paymentService.getProvider())