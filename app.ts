class Person {
    
    private name:string;
    
    constructor(name:string) {
        this.name = name;
    }
    
    public sayHello():void {
        console.log(name + " says hello");
    }
    
}