export interface ISTTRepository {
  start(language: Language): Promise<Script>;
  stop(): void;
}
