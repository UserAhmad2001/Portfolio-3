var pos = 0;
var highestPos = document.querySelector(".projects").children.length / 2;

var leftArrow = document.querySelector(".left-arrow")
var rightArrow = document.querySelector(".right-arrow")
var projects = document.querySelectorAll(".project")
leftArrow.addEventListener('click',arrowClick);
rightArrow.addEventListener('click',arrowClick);

function arrowClick(ev){
        if((ev.currentTarget===rightArrow) && pos!==-2){
            pos--
            projects.forEach(el=>{
                el.style.transform = `translateX(${pos*100}%)`
            })
        }
        else if((ev.currentTarget===leftArrow) && pos!==2){
            pos++
            projects.forEach(el=>{
                el.style.transform = `translateX(${pos*100}%)`
            })
        }
        else if(pos===2){
            pos=0
            projects.forEach(el=>{
                el.style.transform = `translateX(${pos*100}%)`
            })
        }
        else if(pos===-2){
            pos=0
            projects.forEach(el=>{
                el.style.transform = `translateX(${pos*100}%)`
            })
        }

        setThreeDEffect();
}

function setThreeDEffect(){
    
}