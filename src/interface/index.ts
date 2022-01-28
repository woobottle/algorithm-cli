export interface InfoForGenerateFile {
  site: string;
  language: string;
  identifier: string | number;
}

export type IndividualGeneratorInputProps = Omit<InfoForGenerateFile, "site">;