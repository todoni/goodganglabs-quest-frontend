import styled from "@emotion/styled";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import Dictaphone from "./Dictaphone";

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
  grid-column: 3 / 5;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  gap: 1rem;
  width: 40rem;
  height: 50rem;
  align-items: center;
  text-align: center;
`;
