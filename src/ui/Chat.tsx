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
  display: flex;
  flex-direction: column;
  width: 40em;
  height: 50rem;
`;
