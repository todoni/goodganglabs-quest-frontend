import { ITTSRepository } from "../domain/ITTSRepository";
import DI from "../lib/DI";

const useTTS = () => {
  const repository: ITTSRepository = DI.getTTSRepository();
  const speak = (script: Script) => {
    try {
      repository.speak(script);
    } catch (error) {
      console.error(error);
    }
  };
  const pause = () => {
    repository.pause();
  };
  const stop = () => {
    repository.stop();
  };
  const istalking = repository.isPlaying();

  return { speak, pause, stop, istalking };
};

export default useTTS;
