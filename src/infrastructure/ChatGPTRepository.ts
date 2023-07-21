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

const config = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
};

const http = new HttpClient(import.meta.env.VITE_APP_OPENAI_BASE_URL, config);
class ChatGPTRepository implements IChatAIRepository {
  private readonly prevMessages: OpenAIMessage[];
  constructor(messages: { text: string; isSender: boolean }[]) {
    this.prevMessages = messages.map((item) => {
      return { role: item.isSender ? "user" : "assistant", content: item.text };
    });
  }
  public async sendMessage(message: string): Promise<string> {
    const data = {
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
    };
    console.log("MESSAGES:", data.messages);
    try {
      const response: AxiosResponse<OpenAIResponse> = await http.post(
        "chat/completions",
        data
      );
      const answer = response.data.choices[0].message.content;
      return answer;
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to get a response.");
    }
  }
}

export default ChatGPTRepository;