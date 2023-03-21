import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class Robot {
  container = null
  camera = null
  scene = null
  renderer = null

  loader = null
  
  actions = []
  mixer = null
  prevAnimation = null
  currentAnimation = null
  clock = null


  constructor() {
    this.container = document.createElement('div')

    /* Camera */
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    this.camera.position.set(0, 1, 7)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)

    /* Renderer */
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.renderer.setAnimationLoop(this.render.bind(this))
    this.container.appendChild(this.renderer.domElement)

    /* Initial Mesh */
    // const box = new THREE.Mesh(
    //   new THREE.BoxGeometry(1, 1, 1),
    //   new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // )
    // this.scene.add(box)

    /* Controls */
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.target.y = 1.3
    // loader

    this.loader = new GLTFLoader()
    this.loadModel()
    this.addLight()

    //clock
    this.clock = new THREE.Clock()

    this.mixer = new THREE.AnimationMixer()

    /* Resize */
    window.addEventListener('resize', this.resize.bind(this))
  }

  initScene() {
    document.getElementById('container3D').appendChild(this.container)
  }
  loadModel() {
    this.loader.load('RobotExpressive.glb', (gltf) => {
      this.scene.add(gltf.scene)
      // console.log(gltf)

      this.mixer = new THREE.AnimationMixer(gltf.scene)
      // for (const clip of gltf.animations){
      //   const action = this.mixer.clipAction(clip)
      //   this.actions.push(action)
      //   this.actions[0].play()
      //   //console.log(this.actions)
        
      // }
      const array1 = gltf.animations
      array1.forEach((value, index, array) => {
        // console.log('value es: ', value, 'index: ', index, 'array: ', array)
        const action = this.mixer.clipAction(value)
        this.actions.push(action)

      })

      // console.log(this.actions.length)
      this.actions[10].play()
    })
  }

  // playAnimation() {
    
  // }
  

  addLight() {
    const directional = new THREE.DirectionalLight( 0xffffff, 2.3)
    directional.position.set(10, 10, 10)
    this.scene.add(directional)

    const ambiental = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambiental)
  }

  render() {
    const deltaTime = this.clock.getDelta()
    this.mixer.update(deltaTime)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  resize() {
    const { clientWidth: width, clientHeight: height } =
      document.getElementById('container3D')
      this.renderer.setSize(width, height)
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      console.log('this is width: ', width)
    }

  
}

export { Robot }