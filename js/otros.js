const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")


let cW = canvas.width
let cH = canvas.height

const background = new Image();
background.src = './editables/fondo.png'

const myGameArea = {
  frames: 0,
  score: function() {
    const points = Math.floor(this.frames/5);
    ctx.font = '40px serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score ${points}`, cW/2, cH/3)
  }

}
const backgroundImg = {
  img: background,
  x:0,
  y:0,
  speed: 1,
  move:function(){
    this.y += this.speed
    this.y %= cH * 3
  },
  draw: function(){
    ctx.drawImage(this.img, 0, cH*3, cW, cH*3);
    console.log("background rendered");
  }

}

function test(){
    backgroundImg.draw()
}
