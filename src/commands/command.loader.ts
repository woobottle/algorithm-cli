import { GenearteCommmand } from './generate.command';
import { Command } from "commander";

export class CommandLoader {
  public static load(program: Command): void {
    new GenearteCommmand().load(program);
  }

}