import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";
import DI from "../lib/DI";
import useTTS from "./useTTS";

const useChatAI = () => {
  const repository: IChatAIRepository = DI.getChatAIRepository();
  const { pushMessage } = useMessageStore();
  const { speak } = useTTS();

  const sendMessage = async (message: string) => {
    if (message.trim() === "") {
      return;
    }
    try {
      pushMessage({ text: message, isSender: true });
      const answer = await repository.sendMessage(message);
      pushMessage({ text: answer, isSender: false });
      speak(answer);
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage };
};

export default useChatAI;
