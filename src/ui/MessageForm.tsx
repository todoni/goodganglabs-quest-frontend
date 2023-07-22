import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./components/Input";
import useChatAI from "../application/useChatAI";
import ChatGPTRepository from "../infrastructure/ChatGPTRepository";
import useMessageStore from "../domain/zustand/message";
import styled from "@emotion/styled";

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
    <Form onSubmit={handleMessageSubmit}>
      <Input onChange={handleInputChange}>
        <Input.TextField />
      </Input>
    </Form>
  );
};

export default MessageForm;

const Form = styled.form``;
