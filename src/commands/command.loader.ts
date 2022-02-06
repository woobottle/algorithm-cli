import { GenearateCommmand } from './generate.command';
import { Command } from "commander";

export class CommandLoader {
  public static load(program: Command): void {
    new GenearateCommmand().load(program);
  }
}