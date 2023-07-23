import { create } from "zustand";

interface Message {
  text: string;
  isSender: boolean;
  isLoading: boolean;
}

interface MessageState {
  messages: Message[];
  pushMessage: (message: Message) => void;
  popMessage: () => void;
}

const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  pushMessage: (newMessage: Message) => {
    set((prev) => ({
      messages: [...prev.messages, newMessage],
    }));
  },
  popMessage: () => {
    set((prev) => ({
      messages: prev.messages.slice(0, -1),
    }));
  },
}));

export default useMessageStore;
