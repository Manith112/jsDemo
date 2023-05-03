let firstName = "John"
let num1 = 50
num1 += 50
let num2 = 110
num2 -= 10
console.log(num1, num2)

// String Operator
let student1 = {
    fullname: "JACKY",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg",
    
    favorite:"Play Card",
}
let student2 = {
    fullname: "JACK",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg",
    
    favorite:"Play Card",
}

let student3 = {
    fullname: "JAC",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg",
    
    favorite:"Play Card",
}
let student4 = {
    fullname: "JAY",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg",
    
    favorite:"Play Card",
}

let products = [student1, student2, student3, student4]

let ROW = document.querySelector(".row")

// loop to iterate
// products.map(product => hasData.innerHTML += `
// <div class="col-12 col-sm-6 col-md-4 col-lg-3">
// <div class="card">
//     <img src=${product.profile} class="card-img-top" alt="">
//     <div class="card-body">
//     <p class="card-text">${product.fullname}</p>
//     <p class="card-text">${product.favorite}</p>
//     </div>
//     </div>
//     </div>
// `)
//  Ternary Operator
// condition ? expression_1 : expression_2
let age = 17

let output = age >= 18 ? "You are legal to vote": "You are not legal to vote"
console.log(output)

// use case for ternary operator

let loading = false
let noData = document.querySelector(".no-data")
let hasData = document.querySelector(".data")

let feedback = prompt("Do You want to see data?")
console.log(feedback)
 feedback != "yes" ? noData.innerHTML += `
 <div class="card" aria-hidden="true">
 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title placeholder-glow">
     <span class="placeholder col-6"></span>
   </h5>
   <p class="card-text placeholder-glow">
     <span class="placeholder col-7"></span>
     <span class="placeholder col-4"></span>
     <span class="placeholder col-4"></span>
     <span class="placeholder col-6"></span>
     <span class="placeholder col-8"></span>
   </p>
   <a class="btn btn-primary disabled placeholder col-6"></a>
 </div>
</div>
 `
 :
 products.map(product => hasData.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card">
    <img src=${product.profile} class="card-img-top" alt="">
    <div class="card-body">
    <p class="card-text">${product.fullname}</p>
    <p class="card-text">${product.favorite}</p>
    </div>
    </div>
    </div>
`)
