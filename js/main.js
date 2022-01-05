// current slide
let i=0;
// total slides
let j=4;

const dots=document.querySelectorAll(".dot-container button");
const images=document.querySelectorAll(".image-box img")
 
let btn2=document.getElementById("next").onclick=function(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}
let btn1=document.getElementById("prev").onclick=function(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i=(j+i-1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");

}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor="transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor="orangered";
}
function dot(index){
    images.forEach(function(image){
image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i=index-1;
    indicator(index);
}