#!/usr/bin/env node
import { BANNER } from './ui/banner';
import { program } from 'commander';
import { CommandLoader } from './commands';

const bootstrap = () => {
  console.log(BANNER)
  program.version('0.0.2', '-v, --version');
  CommandLoader.load(program);
  program.parse(process.argv);

}

bootstrap();