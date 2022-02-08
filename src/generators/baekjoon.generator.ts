import { baekjoonJavascriptTemplate, baekjoonPythonTemplate, baekjoonJavaTemplate } from '../templates/index';
import { IndividualGeneratorInputProps } from "../interface";
import { AbstractGenerator } from "./abstract.generator";

export class BaekjoonGenerator extends AbstractGenerator {
  public generate({language, identifier}: IndividualGeneratorInputProps): string | Error {
    switch(language) {
      case "python" :
        return baekjoonPythonTemplate(identifier)
      case "javascript" :
        return baekjoonJavascriptTemplate()
      case "java" :
        return baekjoonJavaTemplate();
      default :
        return new Error("input wrong language")
    }
  }
  
}