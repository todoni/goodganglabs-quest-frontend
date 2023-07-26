import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./components/Input";
import useChatAI from "../application/useChatAI";
import styled from "@emotion/styled";
import useMessageStore from "../domain/zustand/message";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatAI();
  const { isLoading } = useMessageStore();

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
    <Form onSubmit={handleMessageSubmit} method="GET">
      <Input>
        <Input.TextField
          css={{ borderRadius: "25px" }}
          value={message}
          onChange={handleInputChange}
          disabled={isLoading}
          autoFocus
        />
      </Input>
    </Form>
  );
};

export default MessageForm;

const Form = styled.form`
  width: 90%;
  margin-left: 1%;
  grid-row: 10;
`;
