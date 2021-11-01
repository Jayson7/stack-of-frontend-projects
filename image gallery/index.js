var all = document.querySelector(".all");

var beautys = document.querySelector(".beautys");
var clothes = document.querySelector(".cloths");
var places = document.querySelector(".places");
var foods = document.querySelector(".foods");
// var boxes = document.querySelector(".boxes div");
var shoes = document.querySelector(".shoes");

// pics
// food
var picfood = document.querySelectorAll(".food");

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
    picfood.forEach((food) => {
        food.style.display = "block";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "block";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "block";
    });
    picplace.forEach((place) => {
        place.style.display = "block";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "block";
    });
});

// beautys
beautys.addEventListener("click", () => {
    console.log("beauty");
    picfood.forEach((food) => {
        food.style.display = "none";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "block";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "none";
    });
    picplace.forEach((place) => {
        place.style.display = "none";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "none";
    });
});

// clothes
clothes.addEventListener("click", () => {
    console.log("clothes");
    picfood.forEach((food) => {
        food.style.display = "none";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "none";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "block";
    });
    picplace.forEach((place) => {
        place.style.display = "none";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "none";
    });
});

// places
places.addEventListener("click", () => {
    picfood.forEach((food) => {
        food.style.display = "none";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "none";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "none";
    });
    picplace.forEach((place) => {
        place.style.display = "block";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "none";
    });
    console.log("places");
});

// shoes
shoes.addEventListener("click", () => {
    console.log("shoes");
    picfood.forEach((food) => {
        food.style.display = "none";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "none";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "none";
    });
    picplace.forEach((place) => {
        place.style.display = "none";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "block";
    });
});

// food

foods.addEventListener("click", () => {
    picfood.forEach((food) => {
        food.style.display = "block";
    });
    picbeauty.forEach((beauty) => {
        beauty.style.display = "none";
    });
    piccloth.forEach((cloth) => {
        cloth.style.display = "none";
    });
    picplace.forEach((place) => {
        place.style.display = "none";
    });
    picshoe.forEach((shoe) => {
        shoe.style.display = "none";
    });
    console.log("foods");
});