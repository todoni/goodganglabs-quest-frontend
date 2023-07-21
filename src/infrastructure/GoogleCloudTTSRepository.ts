import { ITTSRepository } from "../domain/ITTSRepository";
import LanguageDetect from "languagedetect";
import HttpClient from "../lib/HttpClient";

enum SsmlVoiceGender {
  SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED",
  MALE = "MALE",
  FEMALE = "FEMALE",
  NEUTRAL = "NEUTRAL",
}

/*enum AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED",
  LINEAR16 = "LINEAR16",
  MP3 = "MP3",
  MP3_64_KBPS = "MP3_64_KBPS",
  OGG_OPUS = "OGG_OPUS",
  MULAW = "MULAW",
  ALAW = "ALAW",
}*/

//type asdf = "AUDIO_ENCODING_UNSPECIFIED" | "LINEAR16" | "MP3" | "OGG_OPUS" | "MULAW" | "ALAW" | AudioEncoding | null | undefined'

type AudioEncoding = "LINEAR16" | "MP3" | "OGG_OPUS" | "MULAW" | "ALAW";

//const client = new TextToSpeechClient();
const config = {
  headers: {
    "content-type": "applicaton/json; charset=UTF-8",
  },
};
const http = new HttpClient(
  import.meta.env.VITE_APP_GOOGLE_TTS_BASE_URL,
  config
);
//const lngDetector = new LanguageDetect();

class GoogleCloudTTSRepository implements ITTSRepository {
  private audio: HTMLAudioElement | null = null;

  async speak(script: Script): Promise<void> {
    const data = {
      input: { text: script },
      voice: {
        languageCode: "ko-KR",
        ssmlGender: "FEMALE",
      },
      audioConfig: { audioEncoding: "MP3" },
    };
    const response = (await http.post(
      `text:synthesize?key=${import.meta.env.VITE_APP_GOOGLE_API_KEY}`,
      data
    )) as any;
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
