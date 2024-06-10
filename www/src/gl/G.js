import {Renderer, Camera, Transform} from 'ogl'

const CAMERA_POS_Z = 500

class G {
  static _instance = null

  static create(canvas) {
    if (this._instance === null) {
      this._instance = new G(canvas)
    }

    return this._instance
  }

  constructor(canvas) {
    this.canvas = canvas
    this.sizes = {
      height: window.innerHeight,
      width: window.innerWidth,
    }

    // Initiate GL
    this.init()

    // Initiate Listeners
    this.initListeners()
  }

  init() {
    // Renderer
    this.renderer = new Renderer({canvas: this.canvas})

    // WebGL Context
    this.ctx = this.renderer.gl

    // Camera
    this.camera = new Camera(this.ctx)
    this.camera.position.z = CAMERA_POS_Z
    this.camera.perspective({
      aspect: this.ctx.canvas.width / this.ctx.canvas.height,
    })
    this.camera.fov = this.calcFov()

    // Scene
    this.scene = new Transform()

    // Resize function
    this.resize()

    // Start engine
    this.start()
  }

  calcFov() {
    return (2 * Math.atan(this.sizes.height / 2 / CAMERA_POS_Z) * 180) / Math.PI
  }

  resize() {
    this.sizes = {
      height: window.innerHeight,
      width: window.innerWidth,
    }

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.camera.perspective({
      aspect: this.ctx.canvas.width / this.ctx.canvas.height,
    })
    this.camera.fov = this.calcFov()
  }

  initListeners() {
    window.addEventListener('resize', this.resize, false)
  }

  start() {
    requestAnimationFrame(this.loop.bind(this))
  }

  loop(t) {
    this.renderer.render({scene: this.scene, camera: this.camera})

    requestAnimationFrame(this.loop.bind(this))
  }
}

export default G
