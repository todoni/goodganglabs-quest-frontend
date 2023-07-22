import { ITTSRepository } from "../domain/ITTSRepository";
import HttpClient from "../lib/HttpClient";

const http = new HttpClient(import.meta.env.VITE_APP_TEST_URL);

class GoogleCloudTTSRepository implements ITTSRepository {
  private audio: HTMLAudioElement | null = null;

  async speak(script: Script): Promise<void> {
    const data = {
      audioContent: {
        input: { text: script },
        voice: {
          languageCode: "ko-KR",
          ssmlGender: "FEMALE",
        },
        audioConfig: { audioEncoding: "MP3" },
      },
      endpoint: "text:synthesize",
    };
    const response = (await http.post("google-tts/", data)) as any;

    if (!this.audio) {
      this.audio = new Audio(
        "data:audio/wav;base64," + response.data.audioContent
      );
    }

    this.audio.play();
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  resume(): void {
    if (this.audio && this.audio.paused) {
      this.audio.play();
    }
  }

  isPlaying(): boolean {
    return this.audio?.paused === false;
  }
}

export default GoogleCloudTTSRepository;
