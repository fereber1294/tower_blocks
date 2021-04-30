const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let blox
let bloxArr = []
let bloxArrX = []
let bloxDown

let arrDown = []

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

let baseHeight = (bH/3)  
let twrLeft = (cW/2) - (bW/2) //1 
let twrRight = (cW/2) + (bW/2) //3
let twrTop = (cH - baseHeight) //4

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
      if(this.x + this.boxWidth > cW){
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
        twrTop += (cH - (numBlocks * bH))
        bloxArrX.push(this.x)
        drawNewBlock()
        addToArr()
        test()
        bloxArrX.push(drawNewBlock.x)
        twrTop += (cH - (numBlocks * bH))
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
      console.log("bloxx printed");
      console.log("Tower top is " + twrTop);
      twrTop += boxHeight

    };
  }
}

let newX
let newY

let twrXa
let twrXb
let twrY 

function drawNewBlock(x,y,boxWidth,boxHeight,color,blockDownGlow) {
  ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(x,y,boxWidth,boxHeight)
    ctx.strokeStyle = blockDownGlow
    ctx.lineWidth = 4
    ctx.shadowColor = blockDownGlow
    ctx.shadowBlur = 15
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.stroke()
    ctx.strokeRect(x,y,boxWidth, boxHeight)
    numBlocks += 1
    twrTop = twrTop - (bH)
}

function test() {
  for(let i = 0 ; i < bloxArrX.length ; i++){
    drawNewBlock(dropBlox.x,twrTop,bW,bH,blockDownColor,blockDownGlow)
    console.log("block x ="+ drawNewBlock.x);
    console.log("numb is " + numBlocks);
    bloxArrX = []
  }
}

function addToArr() {
  bloxArrX.push(newX)
  console.log("newX is " + newX);

}

function play(animate){
  drop()
  cancelAnimationFrame(animate)
  ctx.clearRect()
  drawNewBlock(dropBlox.x,twrTop,bW,bH,blockDownColor,blockDownGlow)

}

function drop() {
  newY = pend.y
  newX = pend.x
  console.log(newY);
  console.log(newX);
  dropBlox = new Block(newX, newY, gravity,bW,bH,'rgba:255,255,255,0.5')

  addToArr(dropBlox.x)

  console.log("new blox dropping is at " + dropBlox.x + "," + dropBlox.y)
  twrXa = newX
  twrXb = twrXa + bW
  // twrTop = twrTop - bH
  // numBlocks += 1
    // test()
    console.log("Tower top is " + twrTop);  
    // test()
}

const background = new Image();
background.src = './editables/fondo.png'

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

function drawBase(){
  base = new Block(0, cH-(bH/3), gravity,cW,bH,'rgba(255,165,5,0.5)')
  base.drawBlock()
  console.log(twrTop);
}


function buildTower(){  
  bloxx = new Block(dropBlox.x, twrTop,0,bW,bH,blockDownColor)
}

function updateTower(){

}

// function checkDropRed(id) {
//   const down = 

// }

function addToArr() {
  bloxArrX.push(150)
  console.log(bloxArrX);
}

function init(){
  dropBlox = new Block(newX, newY, gravity,bW,bH,blockColor)
  pend = new Pend(0, 50,1,4,bW,bH,blockColor)
  pend.drawBlock()
  dropBlox.drawBlock()
  cancelAnimationFrame(drop)
}

function animate() {
  requestAnimationFrame(animate)
  backgroundImg.draw()
  drawBase()
  // buildTower()
  pend.updateX()
  dropBlox.updateY()  
}

function start() {
  init()
  animate()
}

document.getElementById("drop").addEventListener("click",play)
document.getElementById("start-button").addEventListener("click",start)