const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
let x = e.pageX;
let y = e.pageY;

cursor.style.top = y + "px";
cursor.style.left = x + "px";


})
const dynamicText = document.querySelector(".hi span");
const words = ["Computer Education", "Spoken English", "BCA Tuition", "Stock Market Training"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }


    let url = "https://script.google.com/macros/s/AKfycbzm8z_wFLRKXR-YTtlIHMZe8JV5ycGt4WrQj9cGILWJT9bFRBb0_Cb-xmSVhgS3Qxk-Wg/exec";
     
     let form = document.querySelector('form');
      form.addEventListener("submit",(e)=>{
      let d = new FormData(form);
      console.log(d)
 
      fetch(url,{
         method:'POST',
         body:d
      }).then((res)=>res.text())
      .then((finalres)=>{
         let btn = document.querySelector('form button');
         btn.innerHTML = "Submitted SuccessFully";
         btn.style.backgroundColor = "orange";
         let time = setTimeout(()=>{
             btn.innerHTML = "Submit";
             btn.style.backgroundColor = "rgb(5 130 246)";
             clearTimeout(time);
 
         },3000)
         
 
         
       
 
      })    
     e.preventDefault();
     })
 
 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
for (let i = 0; i <= 10; i++) {

 document.querySelectorAll('.openModalBtn')[i].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "flex";
    console.log(el.target.id)
console.log('object');
    fetch("course.json")
    .then((response)=>
        response.json()
    
    )
    .then((data)=>{console.log(data)
        let coureparent = document.querySelector('.pop');

        coureparent.children[0].src = data[el.target.id].image;
        coureparent.children[1].innerText = data[el.target.id].name;
        coureparent.children[2].innerText = "Duration: "+data[el.target.id].Duration;
        coureparent.children[4].innerText = data[el.target.id].information;

        coureparent.children[6].innerText = data[el.target.id].Benefits;

    })
    .catch((err)=>{
        console.log(err)
    })



})

}







// Get the modal element
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var closeModalSpan = document.querySelector(".close");


// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
closeModalSpan.addEventListener("click",function(){
    modal.style.display = "none";
   
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}