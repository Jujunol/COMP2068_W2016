var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log(name + " says hello");
    };
    return Person;
})();
