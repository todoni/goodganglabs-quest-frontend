import { create } from "zustand";

interface Message {
  text: string;
  isSender: boolean;
  isLoading: boolean;
}

interface MessageState {
  messages: Message[];
  isLoading: boolean;
  pushMessage: (message: Message) => void;
  popMessage: () => void;
  setIsLoading: (loading: boolean) => void;
}

const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  isLoading: false,
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
  setIsLoading: (loading: boolean) => {
    set(() => ({
      isLoading: loading,
    }));
  },
}));

export default useMessageStore;
