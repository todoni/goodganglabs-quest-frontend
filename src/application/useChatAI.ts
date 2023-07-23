import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";
import DI from "../lib/DI";
import useTTS from "./useTTS";

const useChatAI = () => {
  const repository: IChatAIRepository = DI.getChatAIRepository();
  const { pushMessage, popMessage } = useMessageStore();
  const { speak } = useTTS();

  const sendMessage = async (message: string) => {
    if (message.trim() === "") {
      return;
    }
    try {
      pushMessage({ text: message, isSender: true, isLoading: false });
      pushMessage({ text: "기다리는중...", isSender: false, isLoading: true });
      const answer = await repository.sendMessage(message);
      popMessage();
      pushMessage({ text: answer, isSender: false, isLoading: false });
      speak(answer);
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage };
};

export default useChatAI;
