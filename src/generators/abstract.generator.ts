import { InfoForGenerateFile } from "../interface";

export abstract class AbstractGenerator {
  constructor() {}

  public abstract generate({site, language, identifier}: InfoForGenerateFile) : void;
}