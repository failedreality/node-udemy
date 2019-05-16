//key value pair

const person = {
    name: 'max',
    age: 29,
    //you can also run a function inside this
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
