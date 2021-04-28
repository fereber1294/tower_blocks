const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let colors = [
  'white',
  'chartreuse',
  'cyan',
]

let cW = canvas.width
let cH = canvas.height
let gravity = 4

//block width 
let bW = 180
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
let twrTop = (cH - (numBlocks * bH)) //4

// Class for the blocks
// class block {
//   constructor(boxWidth, boxHeight, color, x, y) {
//     this.width = boxWidth
//     this.height = boxHeight
//     this.x = x
//     this.y = y
//     this.speedx = speedx
//     this.color = color
//   }
//   //Gets new limits before drop
//   getNewLimits(){
    
//   }

//   //Tells you if it dropped within tower limits
//   update(){
//     if(this.boxHeight){}

//   }
// }

//Function that draws blocks
function drawBlock(w,h,top,c) {
  ctx.beginPath()
    ctx.fillStyle = c
    ctx.fillRect(twrLeft,top,w,h)
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 4
    ctx.shadowColor = 'white'
    ctx.shadowBlur = 15
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.stroke()
    ctx.strokeRect(twrLeft,top,w,h)
  numBlocks += 1
  twrTop -= h
  console.log("block down");
}

class tower {
  constructor(twrTop, twrLeft, twrRight) {
    this.twrTop = twrTop
    this.twrLeft = twrLeft
    this.twrRight = twrRight
  }
getTwrLimits(){
  
  }  
  
}
//Add background as a gradient
// const background = () => {
//   let grd = ctx.createLinearGradient(0,-800,0,800)
//   grd.addColorStop(0, "black")
//   grd.addColorStop(1, "white")
  
//   ctx.fillStyle = grd
//   ctx.fillRect(0,0,600,800)
// }
// background()
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
    this.y %= 2100
  },
  draw: function(){
    ctx.drawImage(this.img,0,2100,cW,-2100);
    ctx.drawImage(this.img,0,this.y - 2100,cW,-2100);
  }

}
backgroundImg.draw()
/*
PENDULUM
*/
// function upperBlock(uw,uh,utop,uc) {
//   ctx.beginPath()
//     ctx.fillStyle = uc
//     ctx.fillRect(twrLeft/2, utop, uw, uh)
    
//     // ctx.strokeStyle = 'white'
//     // ctx.strokeRect(twrLeft,top,w,h)
//   console.log("block on top");
// }
// upperBlock(bW,bH,20,blockColor)



//TEST
function test (){
  drawBlock(bW,bH,twrTop,blockColor)
  // pendulum(time)
  console.log(twrTop);
  console.log(numBlocks);
}
// dropBlock(bW,bH,twrTop,blockColor)
drawBlock(bW,bH,twrTop,blockColor)
console.log(twrTop);
console.log(numBlocks);
console.log("first block");

function reset (){
  numBlocks = 1
  twrTop = (cH - (numBlocks * bH))
  ctx.clearRect(0,0,cW,cH)
  backgroundImg.draw()
  drawBlock(bW,bH,twrTop,blockColor)
}

//Animation Loop
function animate(){
  requestAnimationFrame(animate)
  ctx.clearRect(0,0, canvas.width, canvas.height)

  block.update()
}


//buttons
let dropButton = document.getElementById("drop").addEventListener("click", test)
let resetButton = document.getElementById("reset").addEventListener("click", reset)
