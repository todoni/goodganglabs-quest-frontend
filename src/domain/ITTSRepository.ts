import { Voice } from "./Voice";

export interface ITTSRepository {
  speak(script: Script, voice: Voice): void;
  pause(): void;
}
