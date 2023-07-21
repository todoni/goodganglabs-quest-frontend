import Input from "./components/Input";
import Button from "./components/Button";
import { css } from "@emotion/react";

const MessageForm = () => {
  return (
    <>
      <Input css={InputStyle}>
        <Input.TextField />
      </Input>
      <Button />
    </>
  );
};

export default MessageForm;

const InputStyle = css`
  width: 300px;
`;
