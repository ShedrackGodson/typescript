// // let can not accept variable re-assignment 
// // let number = 10;
// // number = 'Ten';
// // Also the scope of variable when using let keyword 
// function doSomething(name) {
//     for(let i=0; i<5; i++) {
//         let x = i;
//         x *= 2;
//         console.log(x.toString()+" "+name);
//     }
// }
// // doSomething("Shedrack Godson");
// enum Color { Red, Blue, Green }
// let backgroundColor = Color.Blue;
var message;
message = 'hello';
var endsWithO = message.endsWith('o');
var alternatively = message.endsWith('o');
// Arrow functions
var Name;
(function (Name) {
    Name[Name["Firstname"] = 0] = "Firstname";
    Name[Name["Middlename"] = 1] = "Middlename";
    Name[Name["Surname"] = 2] = "Surname";
})(Name || (Name = {}));
var firstname = Name.Firstname;
var secondname = Name.Middlename;
var lastname = Name.Surname;

console.log(firstname);
console.log(secondname);
console.log(lastname);
