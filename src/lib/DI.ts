import GoogleCloudTTSRepository from "../infrastructure/GoogleCloudTTSRepository";
import ChatGPTRepository from "../infrastructure/ChatGPTRepository";
import { ITTSRepository } from "../domain/ITTSRepository";
import { IChatAIRepository } from "../domain/IChatAIRepository";

class DI {
  private static chatAIRepository: IChatAIRepository = new ChatGPTRepository();
  private static ttsRepository: ITTSRepository = new GoogleCloudTTSRepository();

  public static getChatAIRepository = () => {
    return this.chatAIRepository;
  };

  public static getTTSRepository = () => {
    return this.ttsRepository;
  };
}

export default DI;
