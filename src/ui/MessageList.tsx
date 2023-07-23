import { useRef, useEffect } from "react";
import TextBubble from "./components/TextBubble";
import useMessageStore from "../domain/zustand/message";
import styled from "@emotion/styled";

const MessageList = () => {
  const { messages } = useMessageStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <StyledMessageList ref={scrollRef}>
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
  grid-row: 1 / 10;
`;
