import { TemplateGenerator } from './../generators/template.generator';
import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";
import { generateInput, generateSelect } from '../questions';
import * as chalk from 'chalk';
import inquirer from 'inquirer';
import * as ora from 'ora';
import fs from 'fs';
import { InfoForGenerateFile } from '../interface';
import { getExtension } from '../utils';

export class GenearateCommmand implements AbstractCommand {
  public load(program: Command): void {
    program
    .command('generate')
    .alias('g')
    .action(() => {
      const questions = [
        generateSelect("site", chalk.default.magenta("which site will you solve"), ["baekjoon", "programmers", "swExpertAcademy"]),
        generateSelect("language", chalk.default.magenta("please select programming language"), ["python", "javascript", "java"]),
        generateInput("identifier", chalk.default.magenta("please input problem number or problem title"))
      ];

      const spinner = ora.default({
        spinner: {
          interval: 120,
          frames: ['▹▹▹▹▹', '▸▹▹▹▹', '▹▸▹▹▹', '▹▹▸▹▹', '▹▹▹▸▹', '▹▹▹▹▸'],
        },
        text: "creating file"
      })

      inquirer.prompt(questions).then((answers: InfoForGenerateFile) => {
        spinner.start();
        const { language, identifier } = answers;
        const template = TemplateGenerator.generate(answers);
        const extension = getExtension(language);
        const fileName = language === 'java' ? "Main" : identifier;
        
        if (typeof template === "string") {
          fs.writeFile(`./${fileName}.${extension}`, 
          template, 
          (err: any) => {
            if (err) {
              return console.log("error happened")
            }
            return spinner.stop();
          });
        }
      });
    })
  }
}