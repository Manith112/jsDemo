// code javascript
// variable
// var x = 5; 
// var y = 78;

// console.log(x+y);

// let a ; //declare variable name
// a = 100;
// a = 200;
// a = "banana";
// console.log(a)

// DOM: document object model (bridge between html file and user interface)
// DOM manipulate user interface by using DOM methods
// let HEADING = document.getElementById('heading')
// console.log(HEADING)
// HEADING.innerHTML = "Hello World"
// HEADING.setAttribute("class", "text-darkblue")
// data type
// 1. string
let firstname = "Panha"
let lastname = "Long"
let favorite = 'Researching and Gaming'
let selfIntro =  `Hi, greeting from Cambodia. I, ${lastname} ${firstname}, my favorite is ${favorite}.`

console.log(selfIntro)
console.log(typeof(firstName))
let numberOfApples = `90`
// 2.number
let myApples = 90
console.log(typeof(numberofApples))
let result = numberOfApples / myApples
// let result = numberOfApples + myApples
// let result = numberOfApples - myApples
// let result = numberOfApples * myApples

console.log('----- Total Apples ', typeof(result), result)
let BANNER =
`
    <h1>Welcome, Development Cambodia </h1>
    <h2>Welcome</h2>
`
// document.querySelector('#heading').innerHTML = BANNER

let student = {
    fullname: "JACKY",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg",
    back: "https://cdn.pixabay.com/photo/2023/04/18/08/42/children-7934514_960_720.jpg",
    front: "https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_960_720.jpg",
    favorite:"Play Card",
}
console.log(student.fullname, student.age, student.favorite)
// student = null
console.log(student)

document.querySelector('.row').innerHTML = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.profile} class="card-img-top" alt="">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
            </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.back} class="card-img-top" alt="">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
            </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.front} class="card-img-top" alt="">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
            </div>
            </div>
`

