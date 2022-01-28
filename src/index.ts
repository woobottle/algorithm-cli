import { BANNER } from './../lib/ui/banner';
// import { baekjoonJavascriptTemplate, baekjoonPythonTemplate, programmersJavascriptTemplate, programmersPythonTemplate } from './../lib/collections';
import { generateInput, generateSelect } from '../lib/questions';
import * as chalk from 'chalk';
import inquirer from 'inquirer';
import * as ora from 'ora';
import fs from 'fs';
import { program } from 'commander';

program.version('0.0.1', '-v, --version');
program
  .command('generate')
  .alias('g')
  .action(() => {
    const questions = [
      generateSelect("site", chalk.default.magenta("which site will you solve"), ["baekjoon", "programmers"]),
      generateSelect("language", chalk.default.magenta("please select programming language"), ["python", "javascript"]),
      generateInput("problem", chalk.default.magenta("please input problem number"))
    ];

    console.log(BANNER)
    const spinner = ora.default({
      spinner: {
        interval: 120,
        frames: ['▹▹▹▹▹', '▸▹▹▹▹', '▹▸▹▹▹', '▹▹▸▹▹', '▹▹▹▸▹', '▹▹▹▹▸'],
      },
      text: "creating file"
    })

    inquirer.prompt(questions).then((answers: any) => {
      spinner.start();
      // const { site, language, problem } = answers;
      console.log(answers)
      fs.writeFileSync("../", "");
      setTimeout(() => {
        spinner.stop();
      }, 500);
    });
  })

program.parse(process.argv);
// select programmers or baekjoon
// input problem number
// input language
// create file with number.language



// 쉽게 새로운 사이트와 플랫폼을 추가할 수 있어야 한다.
// 내부 로직이 바뀌더라도 외부에서는 영향을 받으면 안된다.