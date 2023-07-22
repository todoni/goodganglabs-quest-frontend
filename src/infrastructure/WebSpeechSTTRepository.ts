import { ISTTRepository } from "../domain/ISTTRepository";

class WebSpeechSTTRepository implements ISTTRepository {
  public start(language: Language): Promise<Script> {
    //const response = await http.post("google-stt/");
    return new Promise(() => {});
  }
  public stop() {}
}

export default WebSpeechSTTRepository;
