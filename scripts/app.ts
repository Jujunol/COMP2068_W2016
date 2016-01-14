/// <reference path="../typings/tsd.d.ts" />

console.log("App started...");

class Person {
	
	private _name:string;
	
	constructor(name:string) {
		this._name = name;
	}
	
	public speak():void {
		console.log(this._name + " says hello.");
	}
	
}

var tom:Person = new Person("Tom");
tom.speak();