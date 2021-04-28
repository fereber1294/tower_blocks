// const canvas = document.getElementById("main")
// const ctx = canvas.getContext("2d")
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

// //buttons
// let dropButton = document.getElementById("drop").addEventListener("click", test)
// let resetButton = document.getElementById("reset").addEventListener("click", reset)
