  import  {Shape}  from "./shape.js";

  export class Circle extends Shape{
    constructor(color){
       super(color);
        this.color=color;
     }
    calculateArea(){
         
        console.log(`${this.color} colored area are calculate`)
    }
}

var sh= new Circle("blue");
sh.calculateArea();