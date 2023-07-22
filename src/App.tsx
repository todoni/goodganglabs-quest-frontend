import { Canvas } from "@react-three/fiber";
import { Shark } from "./ui/avatars/High_quality_shark_animation";
import Chat from "./ui/Chat";
import Dictaphone from "./application/Dictaphone";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Shark />
      </Canvas>
      <Chat />
      <Dictaphone />
    </>
  );
}

export default App;
