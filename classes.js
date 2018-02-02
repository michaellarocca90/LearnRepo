// /*Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.
// */
// class Car {
//   constructor () {
//
//   }
// }
//   var myCar = new Car()
//   console.log(myCar)
//
// /*
// Story: As a programmer, I can tell how many wheels a car has; default is four. */
//
// class Car {
//   constructor () {
//     this.wheels = 4
//   }
// }
//
// /*
// Story: As a programmer, I can make a Tesla car.
// Hint: Create an variable called myTesla which is of class Tesla which inherits from class Car.
// */
//
// class Tesla extends Car {
//   constructor() {
//     super()
//   }
//   acceleration() {
//     this.speed = this.speed + 10
//   }
//   deceleration() {
//     this.speed = this.speed - 10
//   }
//   }
//
//
// var myTesla = new Tesla()
//
//
// // Story: As a programmer, I can make a Tata car.
// class Tata extends Car {
//   constructor(){
//     super()
//   }
// }
//
// // Story: As a programmer, I can make a Toyota car.
// class Toyota extends Car{
//   constructor(){
//     super()
//   }
// }
//
// // Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
// // Hint: Make model year part of the initialization.
// class Car {
//   constructor (modelyear) {
//     this.wheels = 4
//     this.modelyear = modelyear
//     this.lights = "Off"
//   }
//   lightsSwitch(){
//     if (this.lights == "Off") {
//       this.lights = "On"
//     }
//     else {
//       this.lights = "Off"
//     }
//   }
// }
//
// lightsSwitch();
//
// // Story: As a programmer, I can turn on and off the lights on a given Car.
//
// // Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in? --- light switch lies in he Car class
//
// var myTesla = new Tesla(2018)
// console.log(myTesla.lights)
// myTesla.lightsSwitch()
// console.log(myTesla.lights)
//
// // Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position.
//
//
// // Story: As a programmer, I can signal left and right. Turn signals starts off.
//
//
// // Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.
//
//
//
//
// // Story: As a programmer, I can speed my Teslas up by 10 per acceleration.
//
//
//
// var myTesla = new Tesla()
//
// // Story: As a programmer, I can slow my Teslas down by 7 per braking.
//
//
//
//
//
// // Story: As a programmer, I can speed my Tatas up by 2 per acceleration.
//
// // Story: As a programmer, I can slow my Tatas down by 1.25 per braking.
//
//
//

// Story: As a programmer, I can speed my Toyotas up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Toyotas down by 5 per braking.

class Car {
  constructor () {
    this.wheels = 4
    this.lights = "Off"
    this.turnSig = "Off"
    this.speed = 0
  }
  lightsSwitch(){
    if (this.lights == "Off") {
      this.lights = "On"
      console.log(this.lights)
    }
    else {
      this.lights = "Off"
      console.log(this.lights)
    }
  }
  lightStatus() {
    console.log("The lights are " + this.lights)
    }


  signalSwitch(turn) {
    if (turn == "left") {
      this.turnSig = "left"
    }
    else if (turn == "right") {
      this.turnSig = "right"
    } else {
      this.turnSig = "Off"
    }
  }
}


class Toyota extends Car{
  constructor(modelyear){
    super()
    this.modelyear = modelyear
    this.model = "Toyota"
  }
  acceleration() {
    this.speed = this.speed + 7
  }
  breaking() {
    this.speed = this.speed - 5
  }
  getInfo(){
    console.log(this.wheels)
    console.log(this.lights)
    console.log(this.turnSig)
    console.log(this.speed)
    super.lightStatus()
  }
}

class Tata extends Car {
  constructor(modelyear){
    super()
    this.modelyear= modelyear
    this.model = "Tata"
  }
  acceleration() {
    this.speed = this.speed + 2
  }
  breaking() {
    this.speed = this.speed - 1.25
  }
  getInfo(){
    console.log(this.wheels)
    console.log(this.lights)
    console.log(this.turnSig)
    console.log(this.speed)
    super.lightStatus()
  }
}

class Tesla extends Car {
  constructor(modelyear) {
    super()
    this.modelyear = modelyear
    this.model = "Tesla"
  }
  acceleration() {
    this.speed += 10
  }
  breaking() {
    this.speed -= 7
  }
  getInfo(){
    console.log(this.wheels)
    console.log(this.lights)
    console.log(this.turnSig)
    console.log(this.speed)
    super.lightStatus()
  }
  }


// Story: As a programmer, I can call upon a car to tell me all it's information.
// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.




// Story: As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.

// Hint: Create two of each vehicles, all from different model years, and put them into an Array.
var collection = []
var Tesla1 = new Tesla("2018")
collection.push(Tesla1)
var Tesla2 = new Tesla("2019")
collection.push(Tesla2)
var Toyota1 = new Toyota("1924")
collection.push(Toyota1)
var Toyota2 = new Toyota("2000")
collection.push(Toyota2)
var Tata1 = new Tata("2010")
collection.push(Tata1)
var Tata2 = new Tata("2004")
collection.push(Tata2)

console.log(collection)

function compare(a,b) {
  if (a.modelyear < b.modelyear)
    return -1;
  if (a.modelyear > b.modelyear)
    return 1;
  return 0;
}

//Shorter compare function as above to sort by modelyear
function compare(a,b) {
    return a.modelyear > b.modelyear
}

function compareModel(a,b) {
    return a.model > b.model
}

function compareModelthenYear(a,b) {
    return a.model > b.model && a.modelyear > b.modelyear
}

if model a> && my > then return
collection.sort(compareModel);

//
// Story: As a programmer, I can sort my collection of cars based on model year.




// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
//
// Story: As a programmer, I can sort my collection of cars based on model and then year.
