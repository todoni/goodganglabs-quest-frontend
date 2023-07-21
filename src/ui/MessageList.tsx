import TextBubble from "./components/TextBubble";
import useMessageStore from "../domain/zustand/message";

const MessageList = () => {
  const { messages } = useMessageStore();
  return (
    <>
      {messages.map((message, index) => (
        <TextBubble key={index} {...message} />
      ))}
    </>
  );
};

export default MessageList;
