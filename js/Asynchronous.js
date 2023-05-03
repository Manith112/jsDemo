// function welcomeMessage(name)
let row = document.querySelector(".row")
let productAPI = `https://api.escuelajs.co/api/v1/products`
function getAllProduct(){
    fetch (productAPI)
    .then(resp => resp.json())
    .then(res => console.log (res.map(res => row.innerHTML += `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div class = "card border-0 shadow-sm h-100">
        <img src=${res.images[0]} class="card-img-top" alt="">

        <div class= "card-body">
        <p class="card-text"> ${res.title}</p>
        </div>
        </div>
        </div>
        `)))

}
// getAllProduct()

let basePath = `https://image.tmdb.org/t/p/w440_and_h660_face/`
let movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
function getPopularMovie(){
    fetch (movieAPI)
    .then(resp => resp.json())
    .then(res => console.log (res.results.map(res => row.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
    <div class = "card border-0 shadow-sm h-100">
    <img src=${basePath + res.backdrop_path} class="card-img-top" alt="">

    <div class= "card-body">
    <p class="card-text"> ${res.title}</p>
    </div>
    </div>
    </div>
    
    
    
    
    `)))
   
    
}
getPopularMovie()
