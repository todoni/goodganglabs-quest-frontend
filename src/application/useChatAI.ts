import { IChatAIRepository } from "../domain/IChatAIRepository";
import useMessageStore from "../domain/zustand/message";
import DI from "../lib/DI";
import useTTS from "./useTTS";

const useChatAI = () => {
  const repository: IChatAIRepository = DI.getChatAIRepository();
  const { pushMessage, popMessage, setIsLoading } = useMessageStore();
  const { speak, stop } = useTTS();

  const sendMessage = async (message: string) => {
    if (message.trim() === "") {
      return;
    }
    try {
      pushMessage({ text: message, isSender: true, isLoading: false });
      setIsLoading(true);
      pushMessage({
        text: "대답을 만드는 중...✍️",
        isSender: false,
        isLoading: true,
      });
      stop();
      const answer = await repository.sendMessage(message);
      popMessage();
      setIsLoading(false);
      pushMessage({ text: answer, isSender: false, isLoading: false });
      speak(answer);
    } catch (error) {
      console.error(error);
      popMessage();
      setIsLoading(false);
      pushMessage({
        text: "오류가 발생했어요. 새로고침 후 다시 실행 해주세요 😔",
        isSender: false,
        isLoading: false,
      });
    }
  };
  return { sendMessage };
};

export default useChatAI;
