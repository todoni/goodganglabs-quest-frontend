import { ITTSRepository } from "../domain/ITTSRepository";
import useMessageStore from "../domain/zustand/message";
import DI from "../lib/DI";

const useTTS = () => {
  const repository: ITTSRepository = DI.getTTSRepository();
  const { setIsLoading } = useMessageStore();

  const speak = (script: Script) => {
    try {
      repository.speak(script);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
