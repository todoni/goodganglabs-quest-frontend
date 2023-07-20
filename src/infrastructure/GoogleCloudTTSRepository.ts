import { ITTSRepository } from "../domain/ITTSRepository";
import { Voice } from "../domain/Voice";

class GoogleCloudTTSRepository implements ITTSRepository {
  public speak(script: string, voice: Voice): void {}
  public pause(): void {}
}

export default GoogleCloudTTSRepository;
