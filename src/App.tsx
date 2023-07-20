import { Canvas } from "@react-three/fiber";
import { Shark } from "./ui/avatars/High_quality_shark_animation";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Shark />
      </Canvas>
    </>
  );
}

export default App;
