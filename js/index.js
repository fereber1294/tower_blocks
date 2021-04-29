const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

// let colors = [
//   'white',
//   'chartreuse',
//   'cyan',
// ]

let cW = canvas.width
let cH = canvas.height
let gravity = 1
let friction = 0.4

//block width 
let bW = 180
//block heigth
let bH = 100
//block color
let blockColor = 'rgba(0,0,0,0.5)'
//block counter
let numBlocks = 0
/*
TOWER VIRTUAL LIMITS
(go to p.93-94)
*/
let twrLeft = (cW/2) - (bW/2) //1 
let twrRight = (cW/2) + (bW/2) //3
let twrTop = (cH - (numBlocks * bH)) //4

/*
WINNING LIMIT
*/

let winLine= 150


// Class for the blocks
class Block {
  constructor(x,y,dy,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.dy = dy
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.update = function(){
      if(this.y + this.boxHeight > cH){
        this.dy = 0
      }
      this.y += this.dy
      this.drawBlock()
    }
    this.drawBlock = function() {
      ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.boxWidth,this.boxHeight)
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 4
        ctx.shadowColor = 'white'
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.stroke()
        ctx.strokeRect(this.x,this.y,this.boxWidth, this.boxHeight)
      numBlocks += 1
      twrTop -= this.boxHeight
      console.log("bloxx printed");
    }
  }
}


//Function that draws blocks
// function drawBlock(w,h,top,c) {
//   ctx.beginPath()
//     ctx.fillStyle = c
//     ctx.fillRect(twrLeft,top,w,h)
//     ctx.strokeStyle = 'white'
//     ctx.lineWidth = 4
//     ctx.shadowColor = 'white'
//     ctx.shadowBlur = 15
//     ctx.shadowOffsetX = 0
//     ctx.shadowOffsetY = 0
//     ctx.stroke()
//     ctx.strokeRect(twrLeft,top,w,h)
//     numBlocks += 1
//   twrTop -= h
//   console.log("block down");
// }

const detectWinLine = () => {
  if(twrTop < winLine) {
    backgroundImg.y += 700
    console.log("collided");
    return true
  }
}

const delCanvas = () => {
  ctx.clearRect(0,0, cW, cH)
}

let bloxx
let base


/*
BACKGROUND
*/
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
    
    
  },
  draw: function(){
    ctx.drawImage(this.img,0,this.y + 700,cW,-2100);
  }
  
}

/*
DRAW WIN LIMIT
*/
const drawLine = () => {
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.moveTo(0,winLine)
  ctx.lineTo(cW,winLine)
  ctx.stroke
  ctx.closePath()
}



//TEST
function test (){
  bloxx = new Block(twrLeft, 50, gravity,bW,bH,blockColor)
  console.log(bloxx);
  bloxx.drawBlock()
  base.drawBlock()
  bloxx.update()
  drawLine()
  detectWinLine()

  console.log("Top of tower is "+twrTop);
  console.log("Number of Blocks is "+ (numBlocks-1)); ///////////////corrección chafa, revisar código

backgroundImg.draw()
console.log(twrTop);
console.log(numBlocks);
}

function init(){
  bloxx = new Block(twrLeft, 50,gravity,bW,bH,blockColor)
  console.log(bloxx);  
}

function reset (){
  base = new Block(twrLeft-(bW/2), cH-(bH/3), gravity,bW*2,bH,'rgba(255,165,5,0.5)')

  numBlocks = 0.3
  twrTop = (cH - (numBlocks * bH))

  // delCanvas()
  base.drawBlock()  
  backgroundImg.draw()
  // backgroundImg.move()// bloxx.drawBlock()
  // drawBlock(bW,bH,twrTop,blockColor)
}

/*
ANIMATION LOOP
*/

function animate(){
  requestAnimationFrame(animate)
  // delCanvas()  
  bloxx.update()
  backgroundImg.draw()
}


//MOTOR
function startGame(){
  delCanvas();
  init()
  animate()
}   

window.onload = () => {
  reset()
  base.drawBlock()

  document.getElementById("drop").addEventListener("click", test)
  document.getElementById("reset").addEventListener("click", reset)
  document.getElementById("start-button").addEventListener("click",reset)
    
};