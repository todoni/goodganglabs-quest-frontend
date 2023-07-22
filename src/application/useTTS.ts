import { ITTSRepository } from "../domain/ITTSRepository";
import { useAudioState } from "./AudioStateProvider";

const useTTS = (repository: ITTSRepository) => {
  const { setIsPlaying } = useAudioState();
  const speak = (script: Script) => {
    setIsPlaying(true);
    repository.speak(script);
    setIsPlaying(false);
  };
  const pause = () => {
    repository.pause();
  };
  return { speak, pause };
};

export default useTTS;
