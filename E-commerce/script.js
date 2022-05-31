"use strict";
const objec = [
  {
    price: 299,
    productname: "AIR FORCE",
    image: "./nike2-removebg-preview.png",
    colours: [
      {
        colour: "blue",
        img: "./nike2-removebg-preview.png",
      },
      {
        colour: "purple",
        img: "shoeimg-4-removebg-preview.png",
      },
    ],
  },
  {
    price: 399,
    productname: "AIR JORDAN",
    image: "./img-2-removebg-preview.png",
    colours: [
      {
        colour: "red",
        img: "./img-2-removebg-preview.png",
      },
      { colour: "yellow", img: "./img2-pare-removebg-preview.png" },
    ],
  },
  {
    price: 149,
    productname: "AIR BLAZER",
    image: "./img-3-removebg-preview.png",
    colours: [
      {
        colour: "black",
        img: "./img-3-removebg-preview.png",
      },
      { colour: "green", img: "./img-3-pare-removebg-preview.png" },
    ],
  },
  {
    price: 119,
    productname: "AIR CRATER",
    image: "./img-4-removebg-preview.png",
    colours: [
      {
        colour: "blue",
        img: "./img-4-removebg-preview.png",
      },
      { colour: "gray", img: "./img-4-pare-removebg-preview.png" },
    ],
  },
  {
    price: 459,
    productname: "AIR HIPPIE",
    image: "./imgg-removed-backround.png",
    colours: [
      {
        colour: "#d4cfcf",
        img: "./imgg-removed-backround.png",
      },
      { colour: "orangered", img: "./img-5-pare-removebg-preview.png" },
    ],
  },
];
const menuItem = document.querySelectorAll(".menuItem");
const navBottom = document.querySelector(".navBottom");
let sliderchange = 0;
const colours = document.querySelectorAll(".colour");
const title = document.querySelector(".productTitle");
const price = document.querySelector(".productPrice");
const src = document.querySelector(".productImg");
const slidersrc = document.querySelector(".sliderImg");
const product = document.querySelector(".product");
const buyBotton = document.querySelectorAll(".buyButton");

///////
menuItem.forEach((mov, i) => {
  mov.addEventListener("click", () => {
    sliderchange = i;
    document.querySelector(".sliderWrapper").style.transform = `translate(${
      i * -100
    }vw)`;
    console.log(sliderchange);
    document.querySelector(".sliderWrapper").style.transition = "0.4s";
    //text change
    title.textContent = objec[sliderchange].productname;
    price.textContent = `$${objec[sliderchange].price}`;
    src.src = objec[sliderchange].image;
    //coloour change
    colours.forEach((mov, index) => {
      mov.style.backgroundColor = `${objec[sliderchange].colours[index].colour}`;
    });
  });
});
//////
colours.forEach((mov, i) => {
  mov.addEventListener("click", () => {
    src.src = `${objec[sliderchange].colours[i].img}`;
  });
});
/////////////////scroll smooth
//buyBotton.forEach((mov) => {
//  mov.addEventListener("click", (e) => {
//    e.preventDefault();
//    product.scrollIntoView({ behavior: "smooth" });
//  });
//});
document.querySelector(".sliderWrapper").addEventListener("click", (e) => {
  const click = e.target.classList.contains("buyButton");
  if (!click) return;
  e.preventDefault();
  product.scrollIntoView({ behavior: "smooth" });
});
//////size
const size = document.querySelector(".size");
size.addEventListener("click", (e) => {
  const click = e.target.classList.contains("sizes");
  if (!click) return;
  document.querySelectorAll(".sizes").forEach((mov) => {
    mov.classList.remove("sizehover");
  });
  e.target.classList.add("sizehover");
});
//////////////////////////////////////
//product buy buton
const productbuy = document.querySelector(".productBuy");
const payment = document.querySelector(".payment");
const payClose = document.querySelector(".payClose");

productbuy.addEventListener("click", () => {
  payment.classList.add("paydisplayhide");
});
payClose.addEventListener("click", () => {
  payment.classList.remove("paydisplayhide");
});
////////////////////////////
//choose your style scrool smooth
const choosestyle = document.querySelector(".nsButton");
choosestyle.addEventListener("click", () => {
  document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
});
