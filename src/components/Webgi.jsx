import React, {useRef,useLayoutEffect} from "react";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Webgi() {
  const canvasRef = useRef(null);
  useLayoutEffect(() => {



   
  }, []);
    return (
      <div  id="webgi-canvas" >
        <canvas id="webgi-canvas" ref={canvasRef}/>
      </div>
    );
  }
  