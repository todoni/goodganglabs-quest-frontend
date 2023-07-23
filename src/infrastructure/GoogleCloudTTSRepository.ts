import { ITTSRepository } from "../domain/ITTSRepository";
import HttpClient from "../lib/HttpClient";
import { Event } from "../lib/event";

const http = new HttpClient(import.meta.env.VITE_APP_TEST_URL);

class GoogleCloudTTSRepository implements ITTSRepository {
  private audio: HTMLAudioElement = new Audio();

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

    try {
      const response = (await http.post("google-tts/", data)) as any;

      this.audio.src = "data:audio/wav;base64," + response.data.audioContent;

      this.audio.onended = () => {
        Event.emit("IS_SPEAK", false);
      };

      this.audio.play();
      Event.emit("IS_SPEAK", true);
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to get a response");
    }
  }

  pause(): void {
    this.audio.pause();
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  resume(): void {
    this.audio.play();
  }

  isPlaying(): boolean {
    return this.audio?.paused === false;
  }
}

export default GoogleCloudTTSRepository;
