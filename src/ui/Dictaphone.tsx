import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiSolidMicrophone as Mic } from "react-icons/bi";
import Loader from "../../public/Pulse.gif";
import useChatAI from "../application/useChatAI";
import useMessageStore from "../domain/zustand/message";
import colors from "./components/colors";
import { useEffect } from "react";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const { sendMessage } = useChatAI();
  const { isLoading, setIsLoading } = useMessageStore();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStartListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    sendMessage(transcript);
    resetTranscript();
  };

  useEffect(() => {
    if (listening) {
      setIsLoading(true);
    }
    return () => {
      setIsLoading(false);
    };
  }, [listening]);
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
              backgroundColor:
                isLoading || !isMicrophoneAvailable
                  ? colors.grey300
                  : colors.kikipink,
              padding: "15px",
              cursor:
                isLoading || !isMicrophoneAvailable ? "not-allowed" : "pointer",
            }}
            onClick={
              isLoading || !isMicrophoneAvailable
                ? () => {}
                : handleStartListening
            }
          />
        )}
      </div>
      {listening && <p css={{ gridRow: "12" }}> {transcript}</p>}
    </>
  );
};

export default Dictaphone;
