import { programmersJavascriptTemplate, programmersPythonTemplate } from '../templates/index';
import { IndividualGeneratorInputProps } from './../interface/index';
import { AbstractGenerator } from "./abstract.generator";

export class ProgrammersGenerator extends AbstractGenerator {
  public generate({language}: IndividualGeneratorInputProps): string | Error {
    switch(language) {
      case "python" :
        return programmersPythonTemplate()
      case "javascript" :
        return programmersJavascriptTemplate()
      default :
        return new Error('input wrong language')
    }
  }
  
}