const MOVEMENT_SPEED = 5

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const geometry2 = new THREE.PlaneGeometry(5, 20, 32)
const material2 = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
})
const plane = new THREE.Mesh(geometry2, material2)
scene.add(plane)

camera.position.z = 5

const input = { x: 0, z: 0 }

const animate = function () {
  requestAnimationFrame(animate)

  //   cube.rotation.x += 0.01
  //   cube.rotation.y += 0.01

  movement()

  console.log(input)

  //   cube.position.x += 0.01

  renderer.render(scene, camera)
}

animate()

function movement() {
  for (const [axis, value] of Object.entries(input)) {
    cube.position[axis] +=
      (value / 100) * MOVEMENT_SPEED
  }
}

document.addEventListener(
  'keydown',
  event => {
    const keyName = event.key

    if (keyName === 'w') {
      input.z = -1
    } else if (keyName === 'a') {
      input.x = -1
    } else if (keyName === 's') {
      input.z = 1
    } else if (keyName === 'd') {
      input.x = 1
    }
  },
  false
)

document.addEventListener(
  'keyup',
  event => {
    const keyName = event.key

    console.log(keyName)

    if (keyName === 'w') {
      input.z = 0
    } else if (keyName === 'a') {
      input.x = 0
    } else if (keyName === 's') {
      input.z = 0
    } else if (keyName === 'd') {
      input.x = 0
    }
  },
  false
)
