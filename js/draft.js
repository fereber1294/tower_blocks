// const canvas = document.getElementById("main")
// const ctx = canvas.getContext("2d")

// // let colors = [
// //   'white',
// //   'chartreuse',
// //   'cyan',
// // ]

// let cW = canvas.width
// let cH = canvas.height
// let gravity = 1
// let friction = 0.4

// //block width 
// let bW = 180
// //block heigth
// let bH = 100
// //block color
// let blockColor = 'rgba(0,0,0,0.5)'
// //block counter
// let numBlocks = 0
// /*
// TOWER VIRTUAL LIMITS
// (go to p.93-94)
// */
// let twrLeft = (cW/2) - (bW/2) //1 
// let twrRight = (cW/2) + (bW/2) //3
// let twrTop = (cH - (numBlocks * bH)) //4

// /*
// WINNING LIMIT
// */

// let winLine= 150


// // CLASSES
// class Block {
//   constructor(x,y,dy,boxWidth, boxHeight,color){
//     this.x = x
//     this.y = y
//     this.dy = dy
//     this.boxWidth = boxWidth
//     this.boxHeight = boxHeight
//     this.color = color

//     this.update = function(){
//       if(this.y + this.boxHeight > cH){
//         this.dy = 0
//       }
//       this.y += this.dy
//       this.drawBlock()
//     }
//     this.drawBlock = function() {
//       ctx.beginPath()
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x,this.y,this.boxWidth,this.boxHeight)
//         ctx.strokeStyle = 'white'
//         ctx.lineWidth = 4
//         ctx.shadowColor = 'white'
//         ctx.shadowBlur = 15
//         ctx.shadowOffsetX = 0
//         ctx.shadowOffsetY = 0
//         ctx.stroke()
//         ctx.strokeRect(this.x,this.y,this.boxWidth, this.boxHeight)
//       numBlocks += 1
//       twrTop -= this.boxHeight
//       console.log("bloxx printed");
//     }
//   }
// }

// class Pend {
//   constructor(x,y,speedY,dx,boxWidth, boxHeight,color){
//     this.x = x
//     this.y = y
//     this.speedY = speedY
//     this.dx = dx
//     this.boxWidth = boxWidth
//     this.boxHeight = boxHeight
//     this.color = color

//     this.updateX = function(){
//       if(this.x + this.boxWidth > cW){
//         this.dx = -this.dx
//         // twrTop = (cH - (numBlocks * bH))

//       } else if(this.x < 0){
//         this.dx = -this.dx
             
//       }
//       this.x += this.dx
//       this.drawBlock()
//       // console.log(this.x)
//     }
//     this.drawBlock =function() {
//       ctx.beginPath()
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x,this.y,this.boxWidth,this.boxHeight)
//         ctx.strokeStyle = 'white'
//         ctx.lineWidth = 4
//         ctx.shadowColor = 'white'
//         ctx.shadowBlur = 15
//         ctx.shadowOffsetX = 0
//         ctx.shadowOffsetY = 0
//         ctx.stroke()
//         ctx.strokeRect(twrLeft,top,this.boxWidth, this.boxHeight)
//       }
//   }
// }   


// //Function that draws blocks
// // function drawBlock(w,h,top,c) {
// //   ctx.beginPath()
// //     ctx.fillStyle = c
// //     ctx.fillRect(twrLeft,top,w,h)
// //     ctx.strokeStyle = 'white'
// //     ctx.lineWidth = 4
// //     ctx.shadowColor = 'white'
// //     ctx.shadowBlur = 15
// //     ctx.shadowOffsetX = 0
// //     ctx.shadowOffsetY = 0
// //     ctx.stroke()
// //     ctx.strokeRect(twrLeft,top,w,h)
// //     numBlocks += 1
// //   twrTop -= h
// //   console.log("block down");
// // }

// let pend
// let bloxx
// let base

// let newX
// let newY

// const detectWinLine = () => {
//   if(twrTop < winLine) {
//     backgroundImg.y += 700
//     console.log("collided");
//     return true
//   }
// }

// const delCanvas = () => {
//   ctx.clearRect(0,0, cW, cH)
// }

// document.addEventListener('click', (e) => {
//   newX = blox.x
//   newY = blox.y
//   console.log(newY);
//   console.log(newX);
// })


// /*
// BACKGROUND
// */
// const background = new Image();
// background.src = './editables/fondo.png'

// const myGameArea = {
//   frames: 0,
//   score: function() {
//     const points = Math.floor(this.frames/5);
//     ctx.font = '40px serif';
//     ctx.fillStyle = 'white';
//     ctx.fillText(`Score ${points}`, 75, 50)
//   }
  
// }

// const backgroundImg = {
//   img: background,
//   x:0,
//   y:0,
//   speed: 1,
//   move:function(){
    
    
//   },
//   draw: function(){
//     ctx.drawImage(this.img,0,this.y + 700,cW,-2100);
//   }
  
// }







// /*
// DRAW WIN LIMIT
// */
// const drawLine = () => {
//   ctx.beginPath()
//   ctx.lineWidth = 4
//   ctx.moveTo(0,winLine)
//   ctx.lineTo(cW,winLine)
//   ctx.stroke
//   ctx.closePath()
// }



// //TEST
// function test (){
//   bloxx = new Block(twrLeft, 50, gravity,bW,bH,blockColor)
//   console.log(bloxx);
//   bloxx.drawBlock()
//   base.drawBlock()
//   bloxx.update()
//   drawLine()
//   detectWinLine()

//   console.log("Top of tower is "+twrTop);
//   console.log("Number of Blocks is "+ (numBlocks-1)); ///////////////correcci??n chafa, revisar c??digo

// backgroundImg.draw()
// console.log(twrTop);
// console.log(numBlocks);
// }

// function init(){
//   bloxx = new Block(twrLeft, 50,gravity,bW,bH,blockColor)
//   pend = new Pend(0, 50,1,4,bW,bH,blockColor)
//   pend.drawBlock()

//   console.log(bloxx);  
// }

// function reset (){
//   base = new Block(twrLeft-(bW/2), cH-(bH/3), gravity,bW*2,bH,'rgba(255,165,5,0.5)')

//   numBlocks = 0.3
//   twrTop = (cH - (numBlocks * bH))

//   // delCanvas()
//   base.drawBlock()  
//   backgroundImg.draw()
//   // backgroundImg.move()// bloxx.drawBlock()
//   // drawBlock(bW,bH,twrTop,blockColor)
// }

// /*
// ANIMATION LOOP
// */

// function animate(){
//   requestAnimationFrame(animate)
//   delCanvas()  
//   bloxx.update()
//   pend.updateX()
//   backgroundImg.draw()
// }


// //MOTOR
// function startGame(){
//   delCanvas();
//   init()
//   animate()
// }   

// window.onload = () => {
//   reset()
//   base.drawBlock()

//   document.getElementById("drop").addEventListener("click", test)
//   document.getElementById("reset").addEventListener("click", reset)
//   document.getElementById("start-button").addEventListener("click",reset)
    
// };


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

    this.swiftBlock = function(){
      if(blox.x<0){
        blox.dx = -blox.dx
        blox.x += 1      
      }else if (blox.x>cW){
        // this.dx = this.dx
        blox.x += 1
      }
      blox.x += this.dx
      this.drawBlock()
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


// function pendulumObject(canvas, ctx, time) {
//   ctx.beginPath();
//   // ctx.arc(15+5*sint(time),210,7, 0, 2*Math.PI);
//   ctx.fillStyle = '#c3c5c9';
//   ctx.fill();

//   ctx.fillRect(10*sint(time),210,50,50)
// }

// var rotate = Math.PI/180,
//     maxRotate = 25*rotate,
//     freq = 0.6; //swings per second

// function sint(time) {
//     return Math.sin(freq * time * Math.PI * 0.005); // 0.002 allow time in ms
// }

// function draw(time) {
//   time = time === undefined ? performance.now() : time;
  
//   ctx.setTransform(1,0,0,1,canvas.width*0.5,0);
//   // ctx.clearRect(-canvas.width*.5,0,canvas.width,canvas.height);
//   pendulumObject(canvas, ctx, time);
//   // ctx.rotate(sint(time) * maxRotate);
  
  
//   window.requestAnimationFrame(draw);
// }

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
  // draw()
  delCanvas() 
  for(let i = 0; i<= bloxArr.length; i++){
    bloxDown = new Block(twrLeft, twrTop,0,1,bW,bH,blockColor)
    bloxDown.drawBlock()
  }
  blox.update()
  blox.swiftBlock()

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
