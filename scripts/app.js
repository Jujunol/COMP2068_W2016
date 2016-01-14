/// <reference path="../typings/tsd.d.ts" />
console.log("App started...");
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.speak = function () {
        console.log(this._name + " says hello.");
    };
    return Person;
})();
var tom = new Person("Tom");
tom.speak();
// $(document). 
//# sourceMappingURL=app.js.map