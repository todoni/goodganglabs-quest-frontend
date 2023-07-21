import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";

const useChatAI = (repository: IChatAIRepository) => {
  const { pushMessage } = useMessageStore();
  const sendMessage = async (message: string) => {
    const answer = await repository.sendMessage(message);
    pushMessage({ text: answer, isSender: false });
  };
  return { sendMessage };
};

export default useChatAI;
