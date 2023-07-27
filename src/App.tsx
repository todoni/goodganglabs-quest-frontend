import { Canvas } from "@react-three/fiber";
import { Shark } from "./ui/avatars/High_quality_shark_animation";
import Chat from "./ui/Chat";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mobile } from "./lib/mediaquery";

function App() {
  return (
    <Layout>
      <Canvas css={CanvasStyle}>
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
  ${mobile} {
    grid-template-columns: 1fr;
  }
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 2rem;
`;

const CanvasStyle = css`
  grid-column: 2;
  ${mobile} {
    grid-column: 1;
    grid-row: 1;
  }
`;
