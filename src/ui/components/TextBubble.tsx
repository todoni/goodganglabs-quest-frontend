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
        border: `0.5px solid ${isSender ? colors.kikipink : colors.grey100}`,
        borderRadius: "25px",
        background: `${isSender ? colors.kikipink : colors.grey100}`,
        color: `${isSender ? colors.white : colors.black}`,
        display: "inline-block",
        fontSize: "15px",
        padding: "0.5rem 0.7rem",
        margin: "0.5rem",
        lineHeight: "1.4rem",
        textAlign: "left",
      }}
    >
      {text}
    </div>
  );
};

export default TextBubble;
