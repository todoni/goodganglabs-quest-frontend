export interface IChatAIRepository {
  sendMessage(message: string): Promise<Answer>;
}
