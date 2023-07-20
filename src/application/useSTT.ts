import { ISTTRepository } from "../domain/ISTTRepository";

const useSTT = (repository: ISTTRepository) => {
  const start = (language: Language) => {
    repository.start(language);
  };
  const stop = () => {
    repository.stop();
  };
  return { start, stop };
};

export default useSTT;
