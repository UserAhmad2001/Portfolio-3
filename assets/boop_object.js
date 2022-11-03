// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.querySelector('.home'),
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#FFE742'
    }
});

// create two boxes and a ground
var ground = Bodies.rectangle(innerWidth/2, innerHeight, innerWidth, 1, { isStatic: true, render:{fillStyle:"#FFE742"} });
var rightWall = Bodies.rectangle(innerWidth+1, innerHeight/2, 1, innerHeight, { isStatic: true, render:{fillStyle:"#FFE742"} });
var leftWall = Bodies.rectangle(0, innerHeight/2, 1, innerHeight, { isStatic: true, render:{fillStyle:"#FFE742"} });

// add all of the bodies to the world
Composite.add(engine.world, [ground, rightWall, leftWall]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);



var locations = [
    "./assets/text1.png",
    "./assets/text2.png",
    "./assets/text3.png",
    "./assets/text4.png"
]
var ind = 0;
var ref = document.querySelector('.refresh')
ref.addEventListener('click',(ev)=>{
    ref.classList.add('rotateBtn');
    ind++
    if(ind===(locations.length)){
        ind=0
    }
    document.querySelector('.some-txt').setAttribute("src",locations[ind])
    var rand = (Math.random()*innerWidth);
    World.add(engine.world,[Bodies.circle(rand,20,30,{
        render:{
            sprite:{
                texture:'./assets/boop.svg',
            }
        }
    })])

var audio = new Audio('./assets/boop.wav');
audio.play()
setTimeout(()=>{
    ref.classList.remove('rotateBtn')
},500)
})
