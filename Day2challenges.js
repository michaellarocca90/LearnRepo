a = [0.1, 5.0, 2.2, 15.2, 10.1]

var a = [0.1, 5.0, 2.2, 15.2, 10.1]
var max = 0
//we need a function that is going to return the highest number in the array
function highestNumber (){
  a.forEach(function (element){
    if (element > max) {
      max = element
    }
    console.log(max)
  })
}

//if an element is higher than max change max
var a = [0.1, 5.0, 2.2, 15.2, 10.1]
function highestNumber (){
  var newlist = a.sort()
  console.log(newlist)
  return newlist.pop()
}

//this function will find the lowest number in an array
var a = [0.1, 5.0, 2.2, 15.2, 10.1]
var max = 0
var min = 100
//for each value in the array compare the element to the max variable, if
// if the variable is biggest set max to that larger number
function lowestNumber (){
  a.forEach(function (element){
    if (element < min) {
      min = element
    }
    console.log(min)
  })
}

//Create a function that finds the smallest number (the closest to zero)

var a = [-1, -2, -5, 10, 20, 2, 0.001]
var smallest = 1000

function closestToZero (){
  a.forEach(function(element){
    if (Math.abs(element) < smallest) {
      smallest = Math.abs(element)
    }
  }) console.log(smallest)
}

function lowestNumber (){
  aNew.forEach(function (element){

  })
}


//Create a function that calculates the sum.

var a = [1, 2, 3, 4, 5]
var sum = 0

function sumAll () {
  a.forEach(function (element){
    sum = element + sum
  })
  console.log(sum)
}


//Create a function that calculates the mean value.

var a = [1, 2, 3, 4, 5]
var sum = 0

function sumAll () {
  a.forEach(function (element){
    sum = element + sum
  })
  console.log(sum/a.length)
}



//Create a function that finds the index of the highest number.

var a = [0.1, 5.0, 2.2, 15.2, 10.1]
var max = 0
//we need a function that is going to return the highest number in the array
function highestNumber (){
  a.forEach(function (element){
    if (element > max) {
      max = element
    }
  })
console.log(a.indexOf(max))}



//Create an array with your siblings names, and an array with your parents names.

var siblings = ["Halie", "Timmy", "Megan", "Natalie"]
var parents = ["Lee", "Leslie", "Brad", "Cathy"]

function sibSort() {
  var sib = siblings.sort()
  console.log(sib)
}

//Sort your parents names in reverse alphabetical order.

var siblings = ["Halie", "Timmy", "Megan", "Natalie"]
var parents = ["Lee", "Leslie", "Brad", "Cathy"]

function parSort() {
  var par = parents.sort()
  var par2 = parents.reverse()
  console.log(par2)
}

//Sort all the names in alphabetical order.

var siblings = ["Halie", "Timmy", "Megan", "Natalie"]
var parents = ["Lee", "Leslie", "Brad", "Cathy"]

function sortAll() {
  var all = siblings.concat(parents)
  console.log(all.sort())
}

//Sort all the names in reverse alphabetical order.

var siblings = ["Halie", "Timmy", "Megan", "Natalie"]
var parents = ["Lee", "Leslie", "Brad", "Cathy"]

function sortAll() {
  var all = siblings.concat(parents)
  var all1 = all.sort()
  console.log(all1.reverse())
}

//Create a function that determines if a given name is amongst the names.

function nameSearch() {
  var siblings = ["Halie", "Timmy", "Megan", "Natalie"]
  var givenName = prompt("Give me an English name: ")
  if (siblings.lastIndexOf(givenName) < 0) {
    alert("Doesn't Exist")
  } else {
    alert("This Name Exists!")
  }
}

nameSearch()

//Create a function that returns an array with only the even elements from the array.

var a = [1, 5, 7, 228, 2, 1195]
var b = []
function evenFind () {
  a.forEach(function(element){
    if (element % 2 == 0) {
    b.push(element)
    }
  })
console.log(b)}

evenFind()


//Create a function that returns an array with only the odd elements from the array.

var a = [1, 5, 7, 228, 2, 1195]
var b = []
function oddFind () {
  a.forEach(function(element){
    if (element % 2 !== 0) {
    b.push(element)
    }
  })
console.log(b)}

oddFind()

//Create a function that takes an array and a function, and returns a new array with return value of the function on each of the elements of the array.

var a = [1, 2, 3, 4]
var b = []

function timesTwo() {
  a.forEach(function(element) {
    b.push(element * 2)
  })
console.log(b)}



//Create a function that takes an array and a function, and returns a new array with only the elements for which the function returns true.
//filterArray([5,6,7], function(x) { return x>=6; }) should return [6,7]
//Hint: create a new array and use forEach on the given array, only appending the element if the function returns true
//cutoff is 6 (sorry natalie)

function cutOff(){
  var siblings = ["Halie", "Supercalifra", "w", "Timmy", "Megan", "Natalie"]
  var newarray = []
  siblings.forEach(function(el){
    if (el.length < 6) {
      newarray.push(el)
    }
  })
console.log(newarray)
}

cutOff()

// Story
// As a user I can enter a question on a web page and magically get an answer to my question.

// Goal:
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user.
// Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
// Output the question with the random answer.

// Stretch goal:
// Put the question and answer into a loop that stops when the user enters STOP.

function questionGame() {
  var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do? Do the opposite"]
  var question = prompt("Ask me a question!")
  while (question !== "STOP") {
    var random = Math.floor(Math.random() * 5)
    alert(answers[random])
    question = prompt("Ask me another!")
  }
}

questionGame()

//proud of the above

//

var i = 0
while (i < 10) {
  console.log(i)
  i++
}

for (var i = 0; i < 10; i++) {
    console.log(i)
}
// while loop gives 9 for loop gives undefined


//rewrite this as a for loop
var a = 10;
while (a > 0) {
  console.log(a);
  a = a - 1;
}

for (var i = 10; i > 0 ; i--) {
  console.log(i)
}



//Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
//mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]
//Order does not matter.

var array1 = [1, 2, 3]
var array2 = [2, 30, 1]


function filterDups () {
  var mergeArray = [array1.concat(array2)]
  mergeArray.forEach(function(el){
    var finalarray = []
    if (finalarray.indexOf(el) == -1) {
      finalarray.push(el)
    } else {
      console.log(el + "this is a duplicate")
    }
  })
console.log(finalarray)}
filterDups()

mergeArray.filter()
