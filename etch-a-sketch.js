
var sizes = document.getElementById("size");
var canvas = document.querySelector(".container");
var slider = document.querySelector("#mySlider");
var reset = document.getElementById("reset");

reset.addEventListener("click",()=>{
    canvas.innerHTML="";

for(var j = 0; j < 16 * 16; j++)  {
    
    var divsToAdd  = document.createElement("div");
    canvas.appendChild(divsToAdd);
    divsToAdd.classList.add("divsToAdd");
    canvas.setAttribute('style','grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(16,1fr)');
    
    document.querySelector(".sliderValue").textContent="16";
    document.getElementById("mySlider").value = "16";
}
})


for(var j = 0; j < 16 * 16; j++)  {
        var divsToAdd  = document.createElement("div");
        canvas.appendChild(divsToAdd);
        divsToAdd.classList.add("divsToAdd");
        canvas.setAttribute('style','grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(16,1fr)');
    }

slider.addEventListener('input',()=>{
    canvas.innerHTML="";
    var val = document.getElementById("mySlider").value;
    document.querySelector(".sliderValue").textContent=val;
     
    for(var i = 0; i < val * val; i++)  {
        var divsToAdd  = document.createElement("div");
        canvas.appendChild(divsToAdd);
        divsToAdd.classList.add("divsToAdd");     
    }
   canvas.setAttribute('style', `grid-template-columns: repeat(${val},1fr);grid-template-rows: repeat(${val},1fr);`);
   
});

function draw(){
   var gridBlock = document.querySelectorAll(".divsToAdd");
   gridBlock.forEach(blocks=>blocks.addEventListener("mouseover",event=>{
   var block = event.target;
   block.style.backgroundColor = "rgba(0,0,0,50)";
}
));
}

function erase() {
    var gridBlock = document.querySelectorAll(".divsToAdd");
    gridBlock.forEach(blocks=>blocks.addEventListener("mouseover",event=>{
    var block = event.target;
    block.style.backgroundColor = "";
    }))
};

var blackButton = document.getElementById("black");
var eraser = document.getElementById("eraser");
var multi = document.getElementById("multi");
var progressive = document.getElementById("progressive");



function randomColor(){
   
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

    var color = "rgb("+r+","+g+","+b+")";
    
    return color;
}

function Colordraw(){
    var gridBlock = document.querySelectorAll(".divsToAdd");
    gridBlock.forEach(blocks=>blocks.addEventListener("mouseover",event=>{
    var block = event.target;
    block.style.backgroundColor = randomColor();
    }
    ));
}

multi.addEventListener("click",()=>{
        Colordraw();
     });

blackButton.addEventListener("click",()=>{
        draw();
     }
     );
     
eraser.addEventListener("click",()=>{
         erase();
     }
     )




    
   