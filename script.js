let lines = document.querySelector(".lines");
let menu = document.querySelector(".menu");
// let linesTransform = document.querySelector(".linesTransform");
lines.addEventListener("click",()=>{
    if(lines.classList=="lines"){
        menu.style.left ="0";
        lines.classList.add("linesTransform");
    }
    else{ 
        menu.style.left ="-600px";
        lines.classList.remove("linesTransform");
    }
    
})