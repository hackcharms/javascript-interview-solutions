import { PaymentGatewayInterface } from "../interfaces/PaymentGatewayInterface";

export abstract class AbstractPaymentGateway
  implements PaymentGatewayInterface
{
  protected balance = 1000;
  protected provider: string = "";
  protected token = "";
  static MIN_AMOUNT=10;
  credit(amount: number) {
    if(amount<AbstractPaymentGateway.MIN_AMOUNT){
        throw new Error('Please inter a valid amount, it should be greater than '+AbstractPaymentGateway.MIN_AMOUNT)
    }
    this.log(
      "credit",
      `You account credited ${amount}, current balance => ${
        this.balance + amount
      }`
    );
    return (this.balance += amount);
  }
  get name() {
    return this.provider;
  }
  debit(amount: number) {
    if(amount<AbstractPaymentGateway.MIN_AMOUNT){
        throw new Error('Please inter a valid amount, it should be greater than ' + AbstractPaymentGateway.MIN_AMOUNT)
    }
    if (this.balance - amount<0) {
      throw new Error("Insufficient balance");
    }
    this.log(
      "debit",
      `You account debit ${amount}, current balance => ${this.balance - amount}`
    );
    return (this.balance -= amount);
  }
  currentBalance() {
    this.log("BalanceCheck", `You current Balance is ${this.balance}`);
    return this.balance;
  }
  log(operation: string, message: string) {
    console.log(`${this.provider} - ${operation.toUpperCase()} : ${message}`);
  }
}
