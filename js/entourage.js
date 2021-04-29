import {GlowParticle} from './glowparticle.js'
const backCanvas = document.getElementById("background-canvas")
const c = backCanvas.getContext("2d")


const backColors = [
  {r: 45, g: 74, b:227}, //blue
  {r:250, g:255, b: 89}, //yellow
  {r:255, g:104, b:248}, //purple
  {r: 44, g:209, b:252}, //skyblue
  {r: 54, g:233, b: 84}, //green
]

class App {
  constructor(){
    this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;
    
    this.totalParticles = 1;
    this.particles = [];
    this.maxRadius = 90;
    this.minRadius = 40;
    
    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize(){
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    // this.canvas.width = this.stageWidth * this.pixelRatio
    // this.canvas.height = this.stageHeight * this.pixelRatio
    this.c.scale(this.pixelRatio, this.pixelRatio)

    this.createParticles()
  }

  createParticles(){
    let curColor = 0
    this.particles = []

    for(let i=0; i < this.totalParticles; i++){
      const item = new GlowParticle(
        Math.random * this.stageWidth,
        Math.random * this.stageHeight,
        Math.random * (this.maxRadius - this.minRadius) + this.minRadius,
        backColors[curColor]
      )
    
    if(++curColor >= backColors.length){
      curColor = 0
    }
    this.particles[i] = item
    }
  }

  animate(){
    window.requestAnimationFrame(this.animare.bind(this))
    this.c.clearRect(0,0,this.stageWidth, this.stageHeight)

    for(let i = 0; i < this.totalParticles; i++){
      const item = this.particles[i]
      item.animate(this.c, this.stageWidth, this.stageHeight)
    }

  }
}

window.onload = () => {
  new App();
}