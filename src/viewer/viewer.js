import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

const GlbViewer = ({ height, width, absolute }) => {
  const EPS = 1e-5;

  function Model() {
    const gltf = useLoader(
      GLTFLoader,
      // "/nighthawks_diorama_tilt_brush.glb"
      //   "/starry_night_diorama_tilt_brush.glb"
      "/vr_copy_of_van_goghs_oil_painting.glb"
    );

    var object = gltf.scene;

    object.traverse((node) => {
      if (!node.isMesh) return;
      //   node.material.wireframe = true;

      //   node.material.side = THREE.DoubleSide;

      console.log(node.material);
    });

    // if (m.material instanceof Array) {
    //     for (let i = 0; i < m.material.length; i ++) {
    //         m.material[i] = matrixMaterial;
    //         m.material[i].side = THREE.DoubleSide;
    //     }
    // } else {
    //     m.material = matrixMaterial;
    //     m.material.side = THREE.DoubleSide;
    // }

    return <primitive object={object} />;
  }

  return (
    <div
      id="three-div"
      style={{
        height: height,
        width: width,
        position: absolute && "absolute",
        backgroundColor: "black",
      }}
    >
      <Canvas
        gl={{ antialias: false }}
        // dpr={[1, 1.5]}
        camera={{
          position: [30, 30, -10],
          fov: 60,
          //, near: 1, far: 40
        }}
      >
        <CameraControls />
        <ambientLight intensity={0.1} />
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}

        <Model />
      </Canvas>
    </div>
  );
};

export default GlbViewer;
