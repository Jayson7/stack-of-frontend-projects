var all = document.querySelector(".all");

var beautys = document.querySelector(".beautys");
var clothes = document.querySelector(".cloths");
var places = document.querySelector(".places");
var foods = document.querySelector(".foods");
// var boxes = document.querySelector(".boxes div");
var shoes = document.querySelector(".shoes");

// pics
// food
var picfood = document.getElementsByClassName(".food");

// beauty
var picbeauty = document.querySelectorAll(".beauty");

// cloth
var piccloth = document.querySelectorAll(".cloth");

// place
var picplace = document.querySelectorAll(".place");

// shoe

var picshoe = document.querySelectorAll(".shoe");

// config//////////////////////////
// all
all.addEventListener("click", () => {
    console.log("all");
    picfood.style.display = "block";
    picshoe.style.display = "block";
    picbeauty.style.display = "block";
    piccloth.style.display = "block";
    picplace.style.display = "block";
});

// beautys
beautys.addEventListener("click", () => {
    console.log("beauty");
    picfood.style.display = "none";
    picshoe.style.display = "none";
    picbeauty.style.display = "block";
    piccloth.style.display = "none";
    picplace.style.display = "none";
});

// clothes
clothes.addEventListener("click", () => {
    console.log("clothes");
    picfood.style.display = "none";
    picshoe.style.display = "none";
    picbeauty.style.display = "none";
    piccloth.style.display = "block";
    picplace.style.display = "none";
});

// places
places.addEventListener("click", () => {
    picfood.style.display = "none";
    picshoe.style.display = "none";
    picbeauty.style.display = "none";
    piccloth.style.display = "none";
    picplace.style.display = "block";
    console.log("places");
});

// shoes
shoes.addEventListener("click", () => {
    console.log("shoes");
    picfood.style.display = "none";
    picshoe.style.display = "block";
    picbeauty.style.display = "none";
    piccloth.style.display = "none";
    picplace.style.display = "none";
});

// food

foods.addEventListener("click", () => {
    picfood.style.display = "block";
    picshoe.style.display = "none";
    picbeauty.style.display = "none";
    piccloth.style.display = "none";
    picplace.style.display = "none";
    console.log("foods");
});