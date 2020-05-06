import { Shape } from './Shape'
export class Rectangle extends Shape{
  
    constructor(private _width:number,private _length:number,the_x:number,the_y:number){
        super(the_x,the_y);
    }
    public  get length():number{ 
        return this._length;
    }
    
    public set length(value:number){
     this.length=value;
    }

    public get width():number{  
        return this._width;
    }

    public set width(value:number){
        this._width=value;
    }

    getinfo():string{
        return `${super.getinfo()}`+ `${this._length}`+`${this._width}`;
    }
    
    claculateArea():number{
        return this._width * this._length;
    }

}
