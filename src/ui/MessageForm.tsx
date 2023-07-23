import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./components/Input";
import useChatAI from "../application/useChatAI";
import styled from "@emotion/styled";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatAI();

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
      <Input>
        <Input.TextField value={message} onChange={handleInputChange} />
      </Input>
    </Form>
  );
};

export default MessageForm;

const Form = styled.form``;
