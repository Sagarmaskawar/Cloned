  export  class Shape{
     constructor(color){
       this.color= function()
       {
          return this.color="red";
       }

     }
     drawshape(){
       console.log(`${this.color} drawshape is colore`)

     }
     claculateArea(){
       console.log(`${this.color} colored area is to be calculated`)

     }

 }
 //modules.export={Shape};