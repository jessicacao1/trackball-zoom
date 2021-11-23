import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    OrthographicCamera,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from 'three';

  // container element that will hold our scene
  const container = document.querySelector('#scene-container');
  const renderer = new WebGLRenderer();

  // camera 
  const frustumSize = 400;
  const aspect = container.clientWidth / container.clientHeight;
  // left, right, top, bottom, near, far
  const camera = new OrthographicCamera(frustumSize * aspect / -2 , frustumSize * aspect / 2, frustumSize / 2 , frustumSize / -2, 1, 1000) 
  camera.position.set(0, 0, 10); // alternatively: camera.position.z(10)?

  // world
  const scene = new Scene();
  scene.background = new Color('skyblue');

  // create a geometry
  const geometry = BoxBufferGeometry(5, 5, 5);
  // material - white by default; any other colour and you'll need to use a light source
  const material = new MeshBasicMaterial();
  // mesh time
  const cube = new Mesh(geometry, material);
  // add mesh to scene
  scene.add(cube);

  // make renderer
  const renderer = new WebGLRenderer();
  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight);
  // finally, set the pixel ratio so that our scene will look good on HiDPI displays
  renderer.setPixelRatio(window.devicePixelRatio);

  // add automatically created <canvas> element to page
  container.append(renderer.domElement);

  // render scene!
  renderer.render(scene, camera)