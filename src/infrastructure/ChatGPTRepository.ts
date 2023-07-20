import { IChatAIRepository } from "../domain/IChatAIRepository";

class ChatGPTRepository implements IChatAIRepository {
  public sendMessage(message: string): Promise<string> {
    return new Promise(() => {});
  }
}

export default ChatGPTRepository;
