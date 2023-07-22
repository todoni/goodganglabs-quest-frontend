export interface ISTTRepository {
  start(language: LanguageCode): Promise<Script>;
  stop(): void;
}
