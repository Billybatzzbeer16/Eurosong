import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')






// ES5
// var firstname = "Yannick";
// var name = "Robijn";

// for (var i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i)

// ES6 const vs let
// const kun je niet aanpassen en let wel
// let firstname = "Yannick";
// firstname = "Yennick";
// for (let index = 0; index < array.length; index++) {
//   console.log(index);
// }

//ES5 concatenation
// var firstname = "Yannick";
// var name = "Robijn";
// console.log(firstname + " " + name);

//ES6 Concatenation
// let firstname = "Yannick";
// let name = "Robijn";
// let fullname = `${firstname} ${name}`;
// console.log(fullname);

// ES5
// var person = {
//   firstname: "Yannick",
//   name: "Robijn",
//   sayFullname: function() {
//     console.log(this.firstname +" " + this.name);
//   }
// };

// console.log(person.firstname);
// console.log(person.name);
// console.log(person.sayFullname());

// ES6
// let person = {
//   firstname : "Yannick",
//   name : "Robijn",
//   SayFullname() {
//     console.log(`${this.firstname} ${this.name}`);
//   }
// }

// console.log(person.firstname);
// console.log(person.name);
// console.log(person.sayFullname());4


// ES6
// let person = {
//   firstname: "Yannick",
//   name: "Robijn",
//   sayFullname: function() {
//     console.log(this.firstname + " " + this.name);
//   }
// };

// console.log(person.firstname) // Yannick
// console.log(person.name) // Robijn
// console.log(person.sayFullname()) // Yannick Robijn werkt enkel als we binden

// let getFullname = person.sayFullname.bind(person);
// getFullname();

//ES5
// var person = {
//   firstname : "Yannick",
//   name : "Robijn",
//   SayFullnameAfer10second: function(){
//     var self = this
//     setTimeout(function() {
//       console.log(self.firstname + " " + self.name);
//     }, 2000)
//   }
// }

//person.SayFullnameAfer10second();

// ES6
// const person = {
//   firstname : "Yannick",
//   name : "Robijn",
//   SayFullnameAfer10second: function(){
//     setTimeout(() => {
//       console.log(this.firstname + " " + this.name);
//     }, 2000);
//   }
// }

// person.SayFullnameAfer10second();

// ES6
// const square = number => { bij 1 parameter hoever de haakjes niet
//   return number * number;
// }
// const square = number => number * number; Zelfde functie maar korter

// console.log(square(2))

// ES5 Mapping
// ["1.Red", "2.Green", "3.blue"]

// var colors = ["Red", "Green", "blue"];
// for (var i = 0; i < colors.length; i++){
//   newColors.push([i+1] + "." + colors[i]);
// }
// console.log(newColors);

// ES6 Mapping

// const colors = ["Red", "Green", "blue"];
// const newColors = colors.map((color, index) => `${index+1}, ${color}`)

//ES5 object destructuring
// var person = {
//   firstname : "Yannick",
//   name : "Robijn"
// };

// const {firstname: voornaam, name} = person;
// console.log(voornaam, name);

// const colors = ["blue", "green", "red"];
// const[firstcolor,secondcolor] = colors;

// let person = {
//   firstname : "Yannick",
//   name : "Robijn"
// };

// let personnew = {
//   ...person,
//   age: 21
// };

// console.log(personnew);

//Es 6 classes
// class User{
//   constructor(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   getfullname(){
//     console.log(this.firstname + " " + this.lastname);
//   }
// }

// let user1 = new User("Yannick", "Robijn");
// let user2 = new User("Brad", "Pitt");

// user1.getfullname();

// class Teacher extends User {
//   constructor(firstname, lastname, degree){
//     super(firstname, lastname); //slaat op wat je extend
//     this.degree = degree;
//   }
// }

// let teacher1 = new Teacher("Collin", "achternaam", "Bachelor");
// teacher1.getfullname();

import {User} from "./js/classes/User";