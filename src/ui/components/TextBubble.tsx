interface TextBubbleProps {
  text: string;
  isSender: boolean;
}

const TextBubble = ({ text, isSender }: TextBubbleProps) => {
  return (
    <div
      css={{
        maxWidth: "80%",
        border: `0.5px solid ${isSender ? "#ED1898" : "#BEBEBE"}`,
        borderRadius: "50px",
        background: "#FFFFFF",
        display: "inline-block",
        fontSize: "15px",
      }}
    >
      {text}
    </div>
  );
};

export default TextBubble;
