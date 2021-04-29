const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")

let blox
let bloxArr = []
let bloxDown

let cW = canvas.width
let cH = canvas.height
let gravity = 1
let friction = 0.4
//block width 
let bW = 150
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
let twrTop = (cH - (bH/3)) //4

// console.log("tower top is " + twrTop);

// Class for the blocks
class Tower {
  constructor(x,y,top,bloxCount){
    this.x = x
    this.y = y
    this.top = top
    this.bloxCount = bloxCount
  
    this.drawTower = function(){
      if(blox){}
    }
  }

}
class Block {
  constructor(x,y,speedY,dx,boxWidth, boxHeight,color){
    this.x = x
    this.y = y
    this.speedY = speedY
    this.dx = dx
    this.boxWidth = boxWidth
    this.boxHeight = boxHeight
    this.color = color

    this.update = function(){
      if(this.y + this.boxHeight > twrTop){
        this.speedY = 0
        twrTop = (cH - (numBlocks * bH))

      } else {
        this.speedY = 1
        this.y += 10        
      }
      this.y += this.speedY
      this.drawBlock()
      bloxDown.drawBlock()
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
    // this.swiftBlock = function(){
    //   if(0>this.y>cW){
    //     this.dx = -this.dx
    //   }else{
    //     this.dx+=1
    //   }this.x += this.dx
    //   this.drawBlock()
    // }
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
  blox = new Block(twrLeft, 50,gravity,1,bW,bH,blockColor)
  console.log(blox);
  numBlocks += 1
}



//Animation Loop

const delCanvas = () => {
  ctx.clearRect(0,0, cW, cH)
}



function animate(){  
  requestAnimationFrame(animate)
  delCanvas() 
  for(let i = 0; i<= bloxArr.length; i++){
    bloxDown = new Block(twrLeft, twrTop,gravity,1,bW,bH,blockColor)
    bloxDown.drawBlock()
  }
  blox.update()

}

//MOTOR
function startGame(){
  bloxArr.push(blox)
  delCanvas();
  init()
  animate() 
  numBlocks += 1
}


window.onload = () => {
  document.getElementById("drop").addEventListener("click", init)
  // document.getElementById("reset").addEventListener("click", reset)
  document.getElementById("start-button").addEventListener("click",startGame)
  };
