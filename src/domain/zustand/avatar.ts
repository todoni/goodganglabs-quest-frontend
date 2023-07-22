import { create } from "zustand";

interface AvatarState {
  type: string;
  isTalking: boolean;
  setIsTalking: (talking: boolean) => void;
}

const useAvatarStore = create<AvatarState>((set) => ({
  type: "shark",
  isTalking: false,
  setIsTalking: (talking: boolean) => {
    set((prev) => ({ ...prev, isTalking: talking }));
  },
}));

export default useAvatarStore;
