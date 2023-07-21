export interface ITTSRepository {
  speak(script: Script): void;
  pause(): void;
  stop(): void;
  resume(): void;
  isPlaying(): boolean;
}
