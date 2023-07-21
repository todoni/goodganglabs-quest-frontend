import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";

const useChatAI = (repository: IChatAIRepository) => {
  const { pushMessage } = useMessageStore();
  const sendMessage = async (message: string) => {
    try {
      pushMessage({ text: message, isSender: true });
      const answer = await repository.sendMessage(message);
      pushMessage({ text: answer, isSender: false });
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage };
};

export default useChatAI;
