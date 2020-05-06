import { Shape }  from  './Shape';

export class Circle extends Shape{

    constructor(private _radius: number, the_x:number,the_y:number){
        super(the_x,the_y);
    }
    public get radius():number{
        return this.radius;
    }
    public set radius(value :number){
        this.radius= value;
    }
    getInfo(){
        return super.getinfo()+`, radius=${this._radius}`;
    }
    claculateArea():number{
        return Math.PI * Math.pow(this._radius,2);
    }   




}