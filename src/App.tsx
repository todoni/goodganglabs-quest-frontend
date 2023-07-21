import { Canvas } from "@react-three/fiber";
import { Shark } from "./ui/avatars/High_quality_shark_animation";
import Chat from "./ui/Chat";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Shark />
      </Canvas>
      <Chat />
    </>
  );
}

export default App;
