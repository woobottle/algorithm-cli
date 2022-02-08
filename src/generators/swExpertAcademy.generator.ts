import { swExpertAcademyJavaTemplate, swExpertAcademyPythonTemplate } from '../templates/index';
import { IndividualGeneratorInputProps } from './../interface/index';
import { AbstractGenerator } from "./abstract.generator";

export class SwExpertAcademyGenerator extends AbstractGenerator {
  public generate({language}: IndividualGeneratorInputProps): string | Error {
    switch(language) {
      case "python" :
        return swExpertAcademyPythonTemplate();
      case "java" :
        return swExpertAcademyJavaTemplate();
      default :
        return new Error('only python and java work')
    }
  }
  
}