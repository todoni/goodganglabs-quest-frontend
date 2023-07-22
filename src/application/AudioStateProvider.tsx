import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AudioContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
};

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
});

interface AudioProviderProps {
  children: React.ReactNode;
}

const AudioProvider = ({ children }: AudioProviderProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const value = {
    isPlaying,
    setIsPlaying,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

const useAudioState = () => {
  return useContext(AudioContext);
};

export { AudioProvider, useAudioState };
