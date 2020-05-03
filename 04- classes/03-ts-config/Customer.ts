
class Customer{
    private _firstName:string;
    private _lastName:string;
   
    constructor(firstName:string,lastName:string){
        this._firstName=firstName;
        this._lastName=lastName;
    }
  
    public set firstName(firstName:string){
    this._firstName=firstName;
  }
  public get firstName():string{
      return this._firstName;
  }
  public set lastName(lastName:string){
      this._lastName=lastName;
  } 
  public  get lastName():string{
    return this._lastName;
  }
}
let myCustomer=new Customer("islam","mostafa");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
