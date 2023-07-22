import { Canvas } from "@react-three/fiber";
import { Shark } from "./ui/avatars/High_quality_shark_animation";
import Chat from "./ui/Chat";
import styled from "@emotion/styled";

function App() {
  return (
    <Layout>
      <Canvas css={{ gridColumn: "2" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Shark />
      </Canvas>
      <Chat />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
