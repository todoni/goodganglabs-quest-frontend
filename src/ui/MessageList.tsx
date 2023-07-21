import TextBubble from "./components/TextBubble";
import useMessageStore from "../domain/zustand/message";
import styled from "@emotion/styled";

const MessageList = () => {
  const { messages } = useMessageStore();
  return (
    <StyledMessageList>
      {messages.map((message, index) => (
        <TextBubble key={index} {...message} />
      ))}
    </StyledMessageList>
  );
};

export default MessageList;

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
