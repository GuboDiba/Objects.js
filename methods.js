let student = {
    name:"Steven",
    age:19,
    greet:function() {
        console.log("Hello");
        console.log(`Hello my name is ${student.name} and i am ${student.age} years old}`);
         console.log(`Hello my name is ${this.name} and i am ${this.age} years old}`);

    }
};
student.greet();
student.talk = ()=>{
    console.log(`Hello there`);
}
student.talk();