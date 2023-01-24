// console.log("week 5")

// {
//     var x = 5;
//     var y = 6;
// }

// console.log(x,y);

// const v = 10;
// //v= 9;
// console.log (v);
// console.log (`the variable is ${v}`);

// setTimeout(function print(){
//     console.log("Hello World");
// },5000);


//Object oriented programming 

//circle class
// class Circle {
//     static get PI(){return 3.14159;}
//     constructor(r)
//     {
//         this.radius = r;
//         console.log(this.radius);
//     }
//     getArea(){
//         return Circle.PI * this.radius * this.radius;
//     }
//     getCircumference(){
//         return 2 * Circle.PI * this.radius;
//     }
//     getDiameter(){
//         return 2  * this.radius;
//     }
// }

// //create an instance

// let Circle1 = new Circle (3);
// console.log(Circle1.getArea());
// console.log (Circle1.getCircumference());



//inheritance
class Shape{
    toString(){
   
        return `${this.getType()} area- ${this.getArea()}`;
    }
    getArea(){
        return 0;
    }
    getType (){
        return "Shape";
    }
}
class Rectangle extends Shape {
    constructor (h,w)
    {
        super(); //calls parent constructor
        this.height =h;
        this.width = w;

    }
    getArea(){
        return this.height * this.width;

    }
    getType(){

        return "Rectangle";
    }
}

class Square extends Rectangle{
    constructor(size)
    {
        super(size,size);
    }
    getType()
    {
        return "Square";
    }
}

class Triangle extends Shape {
    constructor (height,base){
        super (); //call to shape (parent)
        this.height = height;
        this.base = base;

    }

    getArea(){
        return 0.5 *this.height * this.base;
    }
    getType(){

        return "Triangle";
    }
}

// let myRectangle = new Rectangle(3,5);
// console.log(myRectangle.toString());

// let mysQuare = new Square (3);
// console.log(mysQuare.toString());

// let myTriangle = new Triangle(3,5)
// console.log( myTriangle.toString());

let shapes =[new Rectangle(3,5), new Square(3), new Triangle(3,5)];
for (let shape of shapes)
{
    console.log(shape.toString());
}