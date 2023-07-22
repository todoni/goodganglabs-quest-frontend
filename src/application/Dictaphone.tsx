import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiSolidMicrophone as Mic } from "react-icons/bi";
import Loader from "../../public/Pulse.gif";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      {listening ? (
        <img
          src={Loader}
          css={{
            width: "62px",
            borderRadius: "50px",
            backgroudColor: "#ED1898",
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
            backgroundColor: "#ED1898",
            padding: "15px 15px 15px 15px",
            cursor: "pointer",
          }}
          onClick={handleStartListening}
        />
      )}
      <p>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
