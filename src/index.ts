import { BANNER } from './ui/banner';
import { program } from 'commander';
import { CommandLoader } from './commands';

const bootstrap = () => {
  console.log(BANNER)

  program.version(require('../package.json').version, '-v, --version');
  CommandLoader.load(program);
  program.parse(process.argv);

}

bootstrap();