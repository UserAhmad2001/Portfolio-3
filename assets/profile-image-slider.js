function mouseOver(ev){
    var audio = new Audio('./assets/boop.wav')
    audio.play();
}


document.querySelectorAll('.img-changer-item').forEach(el=>{
    el.addEventListener('click',(ev)=>{
        document.querySelector('.profile-image').setAttribute('src',el.getAttribute('src'))
    })
    el.addEventListener('mouseover',mouseOver)
})
document.querySelectorAll('.pnts').forEach(el=>{
    el.addEventListener('mouseover',mouseOver);
})
document.querySelectorAll('.img-cont').forEach(el=>{
    el.addEventListener('mouseover',mouseOver);
})
