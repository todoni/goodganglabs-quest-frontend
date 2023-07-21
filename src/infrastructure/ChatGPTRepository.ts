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

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
};

const http = new HttpClient(process.env.REACT_APP_OPENAI_BASE_URL!, config);

class ChatGPTRepository implements IChatAIRepository {
  public async sendMessage(message: string): Promise<string> {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    };

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
