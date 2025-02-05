let img = ['./img/Chair (1).webp','./img/sofa (1).webp','./img/door (1).webp','./img/Chair (2).webp','./img/sofa (2).webp','./img/door (2).webp'];
let cal = 0;
let imgsrc = setInterval(()=>{
    if(cal != img.length){
        document.querySelector('#slider').src = img[cal];
        cal += 1;
    } else{
        cal = 0;
    }
},2000)
