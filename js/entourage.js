// const canvas = document.getElementById("main")
// const ctx = canvas.getContext("2d")

const background = () => {
  let grd = ctx.createLinearGradient(0,-800,0,800)
  grd.addColorStop(0, "black")
  grd.addColorStop(1, "white")
  
  ctx.fillStyle = grd
  ctx.fillRect(0,0,600,800)
}
background()

function drawBase(w,h,top) {
  ctx.beginPath()
    ctx.fillStyle = "gray"
    ctx.fillRect(twrLeft,top,w,h)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.strokeRect(twrLeft,top,w,h)
  numBlocks += 1
  twrTop -= h
  console.log("base set");
}


//TEST
function test (){
  drawBase(bW,bH,twrTop)
  // pendulum(time)
  console.log(twrTop);
  console.log(numBlocks);
}
// dropBlock(bW,bH,twrTop,blockColor)


function reset (){
  numBlocks = 1
  twrTop = (cH - (numBlocks * bH))
  ctx.clearRect(0,0,cW,cH)
  background()
  drawBlock(bW,bH,twrTop,blockColor)
}


// //buttons
// let dropButton = document.getElementById("drop").addEventListener("click", test)
// let resetButton = document.getElementById("reset").addEventListener("click", reset)
