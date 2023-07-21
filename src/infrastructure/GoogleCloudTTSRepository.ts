import { ITTSRepository } from "../domain/ITTSRepository";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import * as fs from "fs";
import * as util from "util";
import LanguageDetect from "languagedetect";

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

const client = new TextToSpeechClient();
const lngDetector = new LanguageDetect();

class GoogleCloudTTSRepository implements ITTSRepository {
  private audio: HTMLAudioElement | null = null;

  async speak(script: Script): Promise<void> {
    const request = {
      input: { text: script },
      voice: {
        languageCode: lngDetector.detect(script, 1)[0][0],
        ssmlGender: SsmlVoiceGender.FEMALE,
      },
      audioConfig: { audioEncoding: "MP3" as AudioEncoding },
    };
    const outputFile = "./output.mp3";
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent!, "binary");
    console.log(`Audio content written to file: ${outputFile}`);

    if (!this.audio) {
      this.audio = new Audio();
    }
    this.audio.src = outputFile;
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
