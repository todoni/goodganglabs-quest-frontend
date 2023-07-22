/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 high_quality_shark_animation.glb --types 
Author: Al-Deezel (https://sketchfab.com/Al-dezel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/high-quality-shark-animation-d6cdfc4fed3549b494bf91caadc3824c
Title: High quality shark animation
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useAudioState } from "../../application/AudioStateProvider";

type GLTFResult = GLTF & {
  nodes: {
    Object_40: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    material_0: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "swimming" | "circling" | "bite";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
//type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Shark(props: JSX.IntrinsicElements["group"]) {
  const { isPlaying } = useAudioState();
  const group = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;
  const { nodes, materials, animations } = useGLTF(
    "/high_quality_shark_animation.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(
    animations,
    group as React.MutableRefObject<THREE.Object3D>
  );
  useEffect(() => {
    if (isPlaying) {
      actions["bite"]?.play();
    } else {
      actions["swimming"]?.play();
    }
  }, [actions, isPlaying]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_3">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="shark2_2_correction">
                      <group name="shark2_2" />
                    </group>
                    <skinnedMesh
                      name="Object_40"
                      geometry={nodes.Object_40.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_40.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/high_quality_shark_animation.glb");
