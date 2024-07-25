export interface PaymentGatewayInterface{
     credit:(amount:number)=>number;
     debit:(amount:number)=>number;
     currentBalance:()=>number;
     name:string
}