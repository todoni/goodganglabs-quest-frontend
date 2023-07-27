import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./components/Input";
import useChatAI from "../application/useChatAI";
import styled from "@emotion/styled";
import useMessageStore from "../domain/zustand/message";
import { css } from "@emotion/react";
import colors from "./components/colors";

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
    <Form onSubmit={handleMessageSubmit}>
      <Input>
        <Input.TextField
          css={InputStyle}
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

const InputStyle = css`
  border-radius: 25px;
  width: 100%;
  padding: 0 18px;
  font-size: 15px;
  line-height: 48px;
  margin: 0;
  border: solid 1px ${colors.grey300};
  &:focus {
    outline: none;
    border: solid 2px ${colors.kikipinkOpacity500};
  }
`;
