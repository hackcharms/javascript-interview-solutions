import { Config } from "../config";
import { AbstractPaymentGateway } from "../gateways/AbstractPaymentGateway";
import { PaymentService } from "../services/PaymentService"

describe('PaymentService',()=>{
    const $defaultPaymentService= new PaymentService().getProvider();
    const config= new Config();
    test('Default payment service ',()=>{
        expect($defaultPaymentService.name).toBe(config.GATEWAY)
        expect($defaultPaymentService).toBeInstanceOf(AbstractPaymentGateway)
    })
    // test("Test description", () => {
//   const t = () => {
//     throw new TypeError();
//   };
//   expect(t).toThrow(TypeError);
// });
    test('Default Payment Transaction test',()=>{
        const $defaultPaymentService= new PaymentService().getProvider();
        let currentBalance= $defaultPaymentService.currentBalance();
        $defaultPaymentService.credit(10)
        currentBalance+=10
        expect($defaultPaymentService.currentBalance()).toBe(currentBalance)
        $defaultPaymentService.debit(20)
        currentBalance-=20
        expect($defaultPaymentService.currentBalance()).toBe(currentBalance)
    })
    test('Default Payment test threshold',()=>{
        const $defaultPaymentService= new PaymentService().getProvider();
        expect(()=>{$defaultPaymentService.debit(0)}).toThrow(Error);
        expect($defaultPaymentService.debit(10)).toBe($defaultPaymentService.currentBalance());
        expect(()=>{$defaultPaymentService.debit(1020)}).toThrow(Error);
        expect(()=>{$defaultPaymentService.credit(0)}).toThrow(Error);
        expect($defaultPaymentService.credit(10)).toBe($defaultPaymentService.currentBalance());
    });
})