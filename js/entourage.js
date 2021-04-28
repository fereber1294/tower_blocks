const backCanvas = document.getElementById("background-canvas")
const c = backCanvas.getContext("2d")

const PI2 = Math.PI * 2
const colors = [
  {r: 45, g: 74, b:227},
  {r:250, g:255, b: 89},
  {r:255, g:104, b:248},
  {r: 44, g:209, b:252},
  {r: 54, g:233, b: 84},
]

class App {
  constructor(){
    this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

    this.totalParticles = 1;
    this.particles = [];
    this.maxRadius = 90;
    this.minRadius = 40;
  
  
    
  }
}

window.onload = () => {
  new App();
}