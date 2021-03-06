import { InfoForGenerateFile } from "../interface";
import { BaekjoonGenerator } from "./baekjoon.generator";
import { ProgrammersGenerator } from "./programmers.generator";
import { SwExpertAcademyGenerator } from "./swExpertAcademy.generator";

export class TemplateGenerator {
  public static generate({site, language, identifier}: InfoForGenerateFile) {
    switch(site) {
      case 'baekjoon' :
        return new BaekjoonGenerator().generate({language, identifier});
      case 'programmers' :
        return new ProgrammersGenerator().generate({language, identifier});
      case 'swExpertAcademy' :
        return new SwExpertAcademyGenerator().generate({language, identifier});
      default :
        return new Error('input wrong site')
    }
  }
}