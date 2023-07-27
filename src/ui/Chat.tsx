import styled from "@emotion/styled";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import Dictaphone from "./Dictaphone";
import { mobile } from "../lib/mediaquery";

const Chat = () => {
  return (
    <ChatWrapper>
      <MessageList />
      <MessageForm />
      <Dictaphone />
    </ChatWrapper>
  );
};

export default Chat;

const ChatWrapper = styled.div`
  grid-column: 6 / 10;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  gap: 1rem;
  width: 40rem;
  height: 50rem;
  ${mobile} {
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 1;
  }
  align-items: center;
  text-align: center;
`;
