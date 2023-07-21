import { create } from "zustand";

interface Message {
  text: string;
  isSender: boolean;
}

interface MessageState {
  messages: Message[];
  pushMessage: (message: Message) => void;
}

const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  pushMessage: (newMessage: Message) => {
    set((prev) => ({
      messages: [...prev.messages, newMessage],
    }));
  },
}));

export default useMessageStore;
