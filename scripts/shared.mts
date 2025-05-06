import chalk from "chalk";
import type { ResultPromise } from "execa";

export const log = {
  info: (msg: string) => console.log(chalk.blue(msg)),
  log: (msg: string) => console.log(msg),
  success: (msg: string) => console.log(chalk.green(`✓ ${msg}`)),
  error: (msg: string) => console.log(chalk.red(`✗ ${msg}`)),
};

export async function run(title: string, script: () => ResultPromise) {
  log.info(`running: ${title}`);

  try {
    const { stdout, stderr, exitCode } = await script();

    if (exitCode === 0) {
      log.log(stdout as string);
      log.success(`finished ${title}`);
      return String(stdout);
    }

    log.error(stderr as string);
  } catch (error) {
    log.error(`error ${title}`);
    log.error(error as string);
    throw error;
  }
}
