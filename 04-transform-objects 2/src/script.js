import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Objects
 */
const group = new THREE.Group()
group.position.x = 0
group.rotation.y = -1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1 ,1 ,1),
    new THREE.MeshBasicMaterial({ color: 'lime' })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1 ,1 ,1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)
group.add(cube2)
cube2.position.x = -1

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1 ,1 ,1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)
group.add(cube3)
cube3.position.y = 1

//axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)