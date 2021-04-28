const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let cW = canvas.width
let cH = canvas.height
let gravity = 1
let friction = 0.4
//block width 
let bW = 150
//block heigth
let bH = 100
//block color
let blockColor = "black"
//block counter
let numBlocks = 1

/*
TOWER VIRTUAL LIMITS
(go to p.93-94)
*/
let twrLeft = (cW/2) - (bW/2) //1 
let twrRight = (cW/2) + (bW/2) //3
let twrTop = (cH - (bH/3)) //4

// console.log("tower top is " + twrTop);

// Class for the blocks
class Block {
  constructor(x,y,speedY,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.speedY = speedY
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.update = function(){
      if(this.y + this.boxHeight > twrTop){
        this.speedY = -this.speedY * friction
        twrTop - this.boxHeight
        // blox.update()
        // console.log("tower top is " + twrTop);
      } else {
        this.speedY += gravity
      }
      this.y += this.speedY
      this.drawBlock()
    }
    this.drawBlock =function() {
      ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.boxWidth,this.boxHeight)
        ctx.strokeStyle = 'white'
        ctx.stroke()
        ctx.strokeRect(twrLeft,top,this.boxWidth, this.boxHeight)
      numBlocks += 1
      // twrTop -= this.boxHeight
      // console.log("block down");
    }
  }
  // update(){
    
  // }

}

//Background

const background = new Image();
background.src = './editables/fondo.png'

const myGameArea = {
  frames: 0,
  score: function() {
    const points = Math.floor(this.frames/5);
    ctx.font = '40px serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score ${points}`, 75, 50)
  }

}
const backgroundImg = {
  img: background,
  x:0,
  y:0,
  speed: 1,
  move:function(){
    this.y += this.speed
    this.y %= cH
  },
  draw: function(){
    ctx.drawImage(this.img,0,this.y,cW,cH);
    ctx.drawImage(this.img,0,this.y - cH,cW,cH);
  }

}



//Init the element

let blox
let bloxArr = []


function drawBase(w,h,top) {
  ctx.beginPath()
    ctx.fillStyle = "gray"
    ctx.fillRect(twrLeft,top,w,h)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.strokeRect(twrLeft,top,w,h)
  numBlocks += 1
  console.log("base set");
}
function init(){  
  blox = new Block(twrLeft, 50,gravity,bW,bH,blockColor)
  console.log(blox);  
}


//Animation Loop

const delCanvas = () => {
  ctx.clearRect(0,0, cW, cH)
}


function animate(){
  
  requestAnimationFrame(animate)
  ctx.clearRect(0,0, cW, cH)
 
  blox.update()
}
// init()
// animate()


//MOTOR

window.onload = () => {
  document.getElementById("drop").addEventListener("click", init())
  document.getElementById("reset").addEventListener("click", reset)
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame(){
    delCanvas();
    // init()
    // animate()
    
    
  }
  
}
backgroundImg.move();
backgroundImg.draw();
drawBase(bW,bH/3,twrTop+(bH/3)*2)