import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiSolidMicrophone as Mic } from "react-icons/bi";
import Loader from "../../public/Pulse.gif";
import useChatAI from "../application/useChatAI";
import useMessageStore from "../domain/zustand/message";
import colors from "./components/colors";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const { sendMessage } = useChatAI();
  const { isLoading, setIsLoading } = useMessageStore();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStartListening = () => {
    resetTranscript();
    setIsLoading(true);
    SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
  };

  const handleStopListening = () => {
    setIsLoading(false);
    SpeechRecognition.stopListening();
    sendMessage(transcript);
    resetTranscript();
  };

  return (
    <>
      <div css={{ gridRow: "11" }}>
        {listening ? (
          <img
            src={Loader}
            css={{
              width: "62px",
              borderRadius: "50px",
              backgroudColor: colors.kikipink,
              cursor: "pointer",
            }}
            onClick={handleStopListening}
          />
        ) : (
          <Mic
            css={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50px",
              color: "white",
              backgroundColor: isLoading ? colors.grey300 : colors.kikipink,
              padding: "15px",
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
            onClick={isLoading ? () => {} : handleStartListening}
          />
        )}
      </div>
      {listening && <p css={{ gridRow: "12" }}> {transcript}</p>}
    </>
  );
};

export default Dictaphone;
