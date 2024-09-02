const API ='https://dummyjson.com/products';
fetch(API)
.then((response) => response.json())
.then((data)=>{
const { products }=data;
const randomProductId = 1;
products [Math.floor(Math.random()*products.length)];
return fetch(`${API}/${randomProductId}`);
})
.then((response)=> response.json())
.then((product:productsample) => {
console.log (product);
type productsample={
id:Number,
title:string,
description:string,
chategory:string,
price:Number,
discountPercentage:number,
rating:Number,
stock:Number,
tags:string[],
brand:string,
sku:string,
weight:Number,
dimensions:{
    width:number,
    height:number,
    depth:number,
}
warrantyInformation:string,
shippingInformation:string,
availabilityStatus:string,
reviews:review[],
returnPolicy:string,
minimumOrderQuantity:number,
meta:{
    createdAt:string,
    updatedAt:string,
    barcode:string,
    qrCode:string,
}
thumbnail:string,
images:image[],
};
type review={
rating:number,
commet:string,
date:string,
reviewerName:string,
reviewerEmail:string,
}
type image={
}
})
.catch((erroг) => {

const heading=document.createElement("hl");

heading.textContent = "ERROR";

heading.style.color = "red";

document.body.appendChild(heading);
})
.finally(()=>{
console.log("finally");
});
