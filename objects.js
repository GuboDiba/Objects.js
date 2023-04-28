//create an objects

let person={
    name:"Ann",
    age:20,
    friend:{
        name:"Amanda",
        age:25,
        myFriend:{
            name:"Susan",
            age:21
        }
    }

}

let person2=new Object();
person2.name="Ann"; //Adding properties
person2['age']=30;
console.log({person2});
person.age=56;  //updating properties
console.log({person});

console.log(person.name); //acces a properties
console.log(person.friend.myFriend.name);
console.log(person['friend']['myFriend']['name']);

delete person.age;
console.log(person);

let person3 = Object.assign(person);
console.log(person3);
let keys=Objects.keys(person3);
console.log({keys});