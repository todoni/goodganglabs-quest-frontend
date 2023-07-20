import { ITTSRepository } from "../domain/ITTSRepository";
import { Voice } from "../domain/Voice";

const useTTS = (repository: ITTSRepository) => {
  const speak = (script: Script, voice: Voice) => {
    repository.speak(script, voice);
  };
  const pause = () => {
    repository.pause();
  };
  return { speak, pause };
};

export default useTTS;
