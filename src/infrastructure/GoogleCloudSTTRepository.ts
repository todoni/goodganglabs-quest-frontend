import { ISTTRepository } from "../domain/ISTTRepository";

class GoogleCloudSTTRepository implements ISTTRepository {
  public start(language: Language): Promise<Script> {
    return new Promise(() => {});
  }
  public stop() {}
}

export default GoogleCloudSTTRepository;
