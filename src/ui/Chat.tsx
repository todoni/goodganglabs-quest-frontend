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
  grid-template-rows: repeat(6, 1fr);
  width: 40em;
  height: 50rem;
  align-items: center;
  text-align: center;
`;
