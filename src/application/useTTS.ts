import { ITTSRepository } from "../domain/ITTSRepository";

const useTTS = (repository: ITTSRepository) => {
  const speak = (script: Script) => {
    repository.speak(script);
  };
  const pause = () => {
    repository.pause();
  };
  return { speak, pause };
};

export default useTTS;
