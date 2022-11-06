function mouseOver(ev){
    var audio = new Audio('./assets/boop.wav')
    audio.play();
    if(ev.target.classList.contains('img-changer-item')){
        document.querySelector('.profile-image').setAttribute('src',ev.target.getAttribute('src'))
        document.querySelector('.full-image-link').setAttribute('href',ev.target.getAttribute('src'));
    }
}

document.querySelectorAll('.img-changer-item').forEach(el=>{
    // el.addEventListener('click',(ev)=>{
    //     document.querySelector('.profile-image').setAttribute('src',el.getAttribute('src'))
    // })
    el.addEventListener('mouseover',mouseOver)
})
document.querySelectorAll('.pnts').forEach(el=>{
    el.addEventListener('mouseover',mouseOver);
})
document.querySelectorAll('.social-media-icons').forEach(el=>{
    el.addEventListener('mouseover',mouseOver);
})


// About section text controller
var txt = [
    '<span class="conc">Ahmad ManaaA</span> is trying his very best.',
    '<span class="conc">Ahmad Manaa</span> is skilled in all stages of web development from designing to deploying the website.',
    '<span class="conc">Ahmad ManaaA</span> is a creative web developer experienced in building highly-Interactive web applications.',
    '<span class="conc">Ahmad manaa</span> has experience using and working with the adobe suite, he has an eye for crafting beautiful responsive UI/UX designs and can use this to help your company.'
]

document.querySelectorAll('.pnts').forEach(el=>{
    el.addEventListener('click', ev => {
        document.querySelector('.bio-cont').innerHTML = txt[ev.target.getAttribute('order')]
    })
})