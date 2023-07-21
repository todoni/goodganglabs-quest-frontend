import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";
import GoogleCloudTTSRepository from "../infrastructure/GoogleCloudTTSRepository";
import useTTS from "./useTTS";

const useChatAI = (repository: IChatAIRepository) => {
  const { pushMessage } = useMessageStore();
  const { speak } = useTTS(new GoogleCloudTTSRepository());

  const sendMessage = async (message: string) => {
    try {
      pushMessage({ text: message, isSender: true });
      const answer = await repository.sendMessage(message);
      pushMessage({ text: answer, isSender: false });
      //speak(answer);
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage };
};

export default useChatAI;
