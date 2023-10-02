'use client'
import React, {useEffect } from 'react';
import * as THREE from 'three';
 import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { orbitControl } from 'three/examples/jsm/controls/OrbitControls';


import styles from '../styles/canva.module.css'
import { gsap } from "gsap";

const ThreeScene = () => {

  useEffect(() => {
    let widthCanva = window.innerWidth;
    // let heightCanva = window.innerHeight; 
    let heightCanva = 1800; 
    const canvas = document.getElementById('myCanvas');
    const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
    renderer.setClearColor("#01257D");
    renderer.setSize( widthCanva, heightCanva,false);
    document.body.appendChild( renderer.domElement );
    window.addEventListener("resize",() => {  renderer.setSize( widthCanva, heightCanva,false);
    //  camera.aspect = window.innerWidth/window.innerHeight;
    // Instantiate a loader

          })
// scene   
    const scene = new THREE.Scene();
    //camera 
    const camera = new THREE.PerspectiveCamera( 45, widthCanva/heightCanva, 0.1, 1000 );
     //controls
    //  const controls = new orbitControl ( camera, renderer.domElement );
     camera.position.set(0,5,40);
    //  controls.update();
     //helper function
     const axesHelper = new THREE.AxesHelper( 16);
     scene.add( axesHelper );
     const gridHelper = new THREE.GridHelper( 16 );
     scene.add( gridHelper );
    //  //geometry 
    //  const geometry = new THREE.SphereGeometry( 6); 
    // const material = new THREE.MeshStandardMaterial( { color: 0x0000ff} ); 
    // const mesh = new THREE.Mesh( geometry, material ); 
    // scene.add( mesh );
    //   mesh.position.set(4,4,0);  
    const light = new THREE.AmbientLight( 0x333333); // soft white light
    scene.add( light );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    scene.add( directionalLight );
    directionalLight.position.set( 30,20, 0 );
    const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
    scene.add( helper );
    const loader = new GLTFLoader();
    console.log(loader,"aca");


  
    function animate() {
      // requestAnimationFrame( animate );
    
      // cube.rotation.x += 0.01;
      // mesh.rotation.y += 0.003;
    
      renderer.render( scene, camera );
    }
    
    animate();
  }, []);
  return <canvas className={styles.myCanvas} id='myCanvas'></canvas>;
};
export default ThreeScene;