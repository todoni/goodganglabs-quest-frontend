import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Button from "../ui/components/Button";

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
      <p>Microphone: {listening ? "on" : "off"}</p>
      <Button onClick={listening ? handleStopListening : handleStartListening}>
        {listening ? "Stop" : "Start"}
      </Button>
      <p>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
