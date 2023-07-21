import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { css } from "@emotion/react";
import useChatAI from "../application/useChatAI";
import ChatGPTRepository from "../infrastructure/ChatGPTRepository";
import useMessageStore from "../domain/zustand/message";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatAI(
    new ChatGPTRepository(useMessageStore().messages)
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <Input css={InputStyle} onChange={handleInputChange}>
        <Input.TextField />
      </Input>
      <Button />
    </form>
  );
};

export default MessageForm;

const InputStyle = css`
  width: 300px;
`;
