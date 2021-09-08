let myName = "Nick";
const numberOfStates = 50;

let result = 5 + 4;


function sayHello() {
    alert("Hello World!");

}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let veggies = ["Carrots", "Broccoli", "Mushrooms", "Artichokes", "Okra"]
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i])

}
let pet = {
    name: "Pepper:",
    breed: "Domestic Short Haired Cat"

};
console.log(pet.name, pet.breed)


let people = [

    {
        name: "Nick",
        age: 21
    },
    {
        name: "Garrett",
        age: 23
    },
    {
        name: "Bethany",
        age: 18
    },
    {
        name: "Brayden",
        age: 15
    },
    {
        name: "Joe",
        age: 30
    },
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
    
}               
                                                        //stringLength = set's value
function getLength(awesome) {                           //stringLength == true or false
    return awesome.length                               //stringLength === true or false

}

let stringLength = getLength("Hello World!");

if(stringLength % 2 == 0) {
    console.log('The world is nice and even!')
}
else {
    console.log('The world is an odd place!')
}

