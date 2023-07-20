import { IChatAIRepository } from "../domain/IChatAIRepository";

const useChatAI = (repository: IChatAIRepository) => {
  const sendMessage = (message: string) => {
    const answer = repository.sendMessage(message);
    // setAnswer
  };
  return { sendMessage };
};

export default useChatAI;
