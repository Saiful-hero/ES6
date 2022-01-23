class Parent{
    constructor(){
        this.fatherName = "schwerznegger"
    }
}

class Child extends Parent{
    constructor(){
        super();
        this.name = "arnold"
    }
}

const baby1 = new Child();
console.log(baby1); 