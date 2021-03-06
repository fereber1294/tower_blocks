
const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let blox
let bloxArr = []
let bloxDown


let cW = canvas.width
let cH = canvas.height
let gravity = 6
let friction = 0.4
//block width 
let bW = 150
//block heigth
let bH = 100
//block color
let blockColor = 'rgba(0,0,0,0.5)'
let blockDownColor = 'rgba(255,47,0,0.5)'
let blockDownGlow = 'rgba(255,47,0,1)'
//block counter
let numBlocks = 0

let twrLeft = (cW/2) - (bW/2) //1 
let twrRight = (cW/2) + (bW/2) //3
let twrTop = (cH - (bH/3)) //4
let baseHeight = (bH/3)  

class Pend {
  constructor(x,y,speedY,dx,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.speedY = speedY
    this.dx = dx
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.updateX = function(){
      if(this.x + this.boxWidth > cW-baseHeight){
        this.dx = -this.dx
        // twrTop = (cH - (numBlocks * bH))

      } else if(this.x < 0){
        this.dx = -this.dx
             
      }
      this.x += this.dx
      this.drawBlock()
      // console.log(this.x)
    }
    this.drawBlock =function() {
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
        ctx.strokeRect(twrLeft,top,this.boxWidth, this.boxHeight)
      }
  }
}   
class Block {
  constructor(x,y,dy,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.dy = dy
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.updateY = function(){
      if(this.y + this.boxHeight > cH-baseHeight){
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

class Tower {
  constructor(x,y,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.drawBlock = function() {
      ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.boxWidth,this.boxHeight)
        ctx.strokeStyle = blockDownGlow
        ctx.lineWidth = 4
        ctx.shadowColor = blockDownGlow
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.stroke()
        ctx.strokeRect(this.x,this.y,this.boxWidth, this.boxHeight)
      numBlocks += 1
      twrTop -= this.boxHeight
      console.log("tower printed");
    }
  }
}


let newX
let newY

let twrX
let twrY

function drop() {
  document.addEventListener('click', (e) => {
    newX = pend.x
    newY = pend.y
    console.log(newY);
    console.log(newX);
    dropBlox = new Block(newX, newY, gravity,bW,bH,blockColor)
    console.log("new blox dropping is at " + dropBlox.x + "," + dropBlox.y)
    bloxArr.push(1)
  })
}

function drawBase(){
  base = new Block(twrLeft-(bW/2), cH-(bH/3), gravity,bW*2,bH,'rgba(255,165,5,0.5)')
  base.drawBlock()
  console.log(twrTop);
}

function getNextBloxxLoc(){
  document.addEventListener('click', (e) => {
    twrX = newX
    twrY = twrY
  })
}

function buildTower(){
  numBlocks = 0.3 + numBlocks
  twrY = (cH - (numBlocks * bH) - bH)
  bloxx = new Block(dropBlox.x, twrY,0,bW,bH,blockDownColor)
  bloxx.drawBlock()
  twrTop += bH
}

function init(){
  dropBlox = new Block(newX, newY, gravity,bW,bH,blockColor)
  pend = new Pend(0, 50,1,4,bW,bH,blockColor)
  pend.drawBlock()
  dropBlox.drawBlock()
}


function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,cW,cH)
  drawBase()
  pend.updateX()
  dropBlox.updateY()
  bloxx.updateY()  
}

init()
animate()
document.getElementById("drop").addEventListener("click",drop)
