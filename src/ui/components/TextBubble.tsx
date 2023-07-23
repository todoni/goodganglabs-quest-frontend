import colors from "./colors";

interface TextBubbleProps {
  text: string;
  isSender: boolean;
}

const TextBubble = ({ text, isSender }: TextBubbleProps) => {
  return (
    <div
      css={{
        maxWidth: "80%",
        alignSelf: `${isSender ? "flex-end" : "flex-start"}`,
        border: `0.5px solid ${isSender ? "#ED1898" : colors.grey100}`,
        borderRadius: "25px",
        background: `${isSender ? "#ED1898" : colors.grey100}`,
        color: `${isSender ? "#FFFFFF" : "#000000"}`,
        display: "inline-block",
        fontSize: "15px",
        padding: "0.5rem 0.7rem",
        margin: "0.5rem",
      }}
    >
      {text}
    </div>
  );
};

export default TextBubble;
