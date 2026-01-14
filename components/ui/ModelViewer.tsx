'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function LoadingFallback() {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#dc2626" wireframe />
    </mesh>
  );
}

interface ModelViewerProps {
  modelUrl: string;
  className?: string;
}

export function ModelViewer({
  modelUrl,
  className = ''
}: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 100], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Model with Stage for automatic centering and lighting */}
        <Suspense fallback={<LoadingFallback />}>
          <Stage
            intensity={1}
            environment="city"
            adjustCamera={1.2}
          >
            <Model url={modelUrl} />
          </Stage>
        </Suspense>

        {/* Controls - horizontal rotation only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
