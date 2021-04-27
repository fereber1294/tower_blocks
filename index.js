const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let cW = canvas.width
let cH = canvas.height

//block width 
let bW = 180
//block heigth
let bH = 100
//block color
let blockColor = "black"
//block counter
let numBlocks = 1

// Class for the blocks
class block {
  constructor(boxWidth, boxHeight, color, xr, yl) {
    this.width = boxWidth
    this.height = boxHeight
    this.xl = yl
    this.xr = xr
    this.speedx = speedx
    this.color = color
    this.gravity = gravity
    this.gravitySpeed = gravitySpeed
  }
  //Gets new limits before drop
  getNewLimits(){
    
  }

  //Tells you if it dropped within tower limits
  dropped(tower){
  //   return !(
  //     this.xl > 
  //   )
  }
}

//Function that draws blocks
function drawBlock(w,h,top,c) {
  ctx.beginPath()
    ctx.fillStyle = c
    ctx.fillRect(twrLeft,top,w,h)
    ctx.strokeStyle = 'white'
    ctx.strokeRect(twrLeft,top,w,h)
    ctx.stroke()
  numBlocks += 1
  twrTop -= h
  console.log("block down");
}
let twrLeft = (cW/2) - (bW/2) //1 
let twrRight = (cW/2) + (bW/2) //3
let twrTop = (cH - (numBlocks * bH)) //4

class tower {
  constructor(twrTop, twrLeft, twrRight) {
  this.twrTop = twrTop
  this.twrLeft = twrLeft
  this.twrRight = twrRight
  }
    /*
TOWER VIRTUAL LIMITS
(go to p.93-94)
*/
  getTwrLimits(){
      
  }  
  
}
//Add background as a gradient
const background = () => {
  let grd = ctx.createLinearGradient(0,-800,0,800)
  grd.addColorStop(0, "black")
  grd.addColorStop(1, "white")
  
  ctx.fillStyle = grd
  ctx.fillRect(0,0,600,800)
}
background()







drawBlock(bW,bH,twrTop,blockColor)
console.log(twrTop);
console.log(numBlocks);
console.log("first block");

function test (){
  drawBlock(bW,bH,twrTop,blockColor)
  console.log(twrTop);
  console.log(numBlocks);
}

function reset (){
  numBlocks = 1
  twrTop = (cH - (numBlocks * bH))
  ctx.clearRect(0,0,cW,cH)
  background()
  drawBlock(bW,bH,twrTop,blockColor)
}

let dropButton = document.getElementById("drop").addEventListener("click", test)
let resetButton = document.getElementById("reset").addEventListener("click", reset)