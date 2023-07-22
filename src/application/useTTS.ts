import { ITTSRepository } from "../domain/ITTSRepository";
import DI from "../lib/DI";

const useTTS = () => {
  const repository: ITTSRepository = DI.getTTSRepository();
  const speak = (script: Script) => {
    repository.speak(script);
  };
  const pause = () => {
    repository.pause();
  };
  const istalking = repository.isPlaying();

  return { speak, pause, istalking };
};

export default useTTS;
