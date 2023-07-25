import { AxiosResponse } from "axios";
import { IChatAIRepository } from "../domain/IChatAIRepository";
import HttpClient from "../lib/HttpClient";

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: [
    {
      message: {
        role: string;
        content: string;
      };
      finish_reason: string;
      index: number;
    }
  ];
}

interface OpenAIMessage {
  role: string;
  content: string;
}

const http = new HttpClient(import.meta.env.VITE_APP_API_URL);
class ChatGPTRepository implements IChatAIRepository {
  private prevMessages: OpenAIMessage[] = [];

  public async sendMessage(message: string): Promise<string> {
    const data = {
      content: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          ...this.prevMessages,
          {
            role: "user",
            content: message,
          },
        ],
      },
      endpoint: "chat/completions",
    };
    try {
      console.log("messages", this.prevMessages);
      const response: AxiosResponse<OpenAIResponse> = await http.post(
        "openai-chat/",
        data
      );
      const answer = response.data.choices[0].message;
      this.prevMessages = [
        ...this.prevMessages,
        { role: "user", content: message },
        answer,
      ];
      //console.log("answer", response.data.choices[0].message);
      return answer.content;
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to get a response.");
    }
  }
}

export default ChatGPTRepository;
