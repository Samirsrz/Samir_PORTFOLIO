"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

type Vec3 = [number, number, number];

const NODES: { pos: Vec3; size: number; hub?: boolean }[] = [
  { pos: [0, 0, 0], size: 0.15, hub: true },
  { pos: [1.7, 1.0, 0.4], size: 0.08 },
  { pos: [-1.8, 0.6, -0.3], size: 0.09 },
  { pos: [0.3, 1.9, -0.6], size: 0.07 },
  { pos: [-0.9, -1.6, 0.5], size: 0.08 },
  { pos: [1.5, -1.2, -0.4], size: 0.09 },
  { pos: [-1.9, -0.4, 0.8], size: 0.07 },
  { pos: [2.2, -0.2, 0.9], size: 0.08 },
  { pos: [-0.2, -2.2, -0.3], size: 0.07 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 3],
  [1, 7],
  [2, 6],
  [4, 6],
  [4, 8],
  [5, 7],
  [5, 8],
  [2, 4],
];

function Scene({ pointer }: { pointer: MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const autoRotation = useRef(0);

  useFrame((_, delta) => {
    autoRotation.current += delta * 0.12;
    if (group.current) {
      const parallaxY = pointer.current.x * 0.2;
      const targetX = pointer.current.y * 0.2;
      group.current.rotation.y = autoRotation.current + parallaxY;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.04;
      shell.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group ref={group}>
      <Icosahedron ref={shell} args={[3.1, 1]}>
        <meshBasicMaterial color="#9C3A45" wireframe transparent opacity={0.16} />
      </Icosahedron>

      {EDGES.map(([a, b], i) => (
        <Line
          key={i}
          points={[NODES[a].pos, NODES[b].pos]}
          color="#C9A24B"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}

      {NODES.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[n.size, 16, 16]} />
          <meshBasicMaterial color={n.hub ? "#C9A24B" : "#F6EEE8"} />
        </mesh>
      ))}
    </group>
  );
}

export default function NodeNetwork() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <div
      className="h-full w-full"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {useMemo(
          () => (
            <Scene pointer={pointer} />
          ),
          []
        )}
      </Canvas>
    </div>
  );
}
