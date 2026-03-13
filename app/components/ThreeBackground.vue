<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number
let cleanup: (() => void) | null = null

onMounted(async () => {
  if (!canvasRef.value) return

  const THREE = await import('three')

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create floating particles
  const particleCount = 150
  const positions = new Float32Array(particleCount * 3)
  const velocities: number[] = []
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    velocities.push(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.005
    )
    sizes[i] = Math.random() * 3 + 1
  }

  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x5c7cfa,
    size: 0.08,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  })

  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  // Create connecting lines
  const lineGeometry = new THREE.BufferGeometry()
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x4263eb,
    transparent: true,
    opacity: 0.1,
    blending: THREE.AdditiveBlending,
  })

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
  scene.add(lines)

  // Create floating geometric shapes
  const shapes: THREE.Mesh[] = []
  const shapeMaterial = new THREE.MeshBasicMaterial({
    color: 0x5c7cfa,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  })

  for (let i = 0; i < 5; i++) {
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
    ]
    const mesh = new THREE.Mesh(
      geometries[Math.floor(Math.random() * geometries.length)],
      shapeMaterial.clone()
    )
    mesh.position.set(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10 - 5
    )
    mesh.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
    }
    mesh.userData.floatSpeed = Math.random() * 0.5 + 0.5
    mesh.userData.floatOffset = Math.random() * Math.PI * 2
    shapes.push(mesh)
    scene.add(mesh)
  }

  camera.position.z = 15

  let mouseX = 0
  let mouseY = 0

  function onMouseMove(e: MouseEvent) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  }

  window.addEventListener('mousemove', onMouseMove)

  function updateLines() {
    const positions = particles.geometry.attributes.position.array as Float32Array
    const linePositions: number[] = []
    const maxDistance = 4

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < maxDistance) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          )
        }
      }
    }

    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    )
  }

  function animate() {
    animationId = requestAnimationFrame(animate)

    const time = Date.now() * 0.001
    const posAttr = particles.geometry.attributes.position
    const posArray = posAttr.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] += velocities[i * 3]
      posArray[i * 3 + 1] += velocities[i * 3 + 1]
      posArray[i * 3 + 2] += velocities[i * 3 + 2]

      // Boundaries
      if (Math.abs(posArray[i * 3]) > 20) velocities[i * 3] *= -1
      if (Math.abs(posArray[i * 3 + 1]) > 20) velocities[i * 3 + 1] *= -1
      if (Math.abs(posArray[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1
    }
    posAttr.needsUpdate = true

    updateLines()

    // Animate shapes
    shapes.forEach((shape) => {
      shape.rotation.x += shape.userData.rotationSpeed.x
      shape.rotation.y += shape.userData.rotationSpeed.y
      shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.005
    })

    // Smooth camera follow
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  animate()

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)

  cleanup = () => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    particleGeometry.dispose()
    particleMaterial.dispose()
    lineMaterial.dispose()
    shapeMaterial.dispose()
  }
})

onUnmounted(() => {
  if (cleanup) cleanup()
})
</script>

<template>
  <canvas ref="canvasRef" class="three-canvas" />
</template>
