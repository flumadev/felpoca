#!/usr/bin/env node

const prompts = require('prompts');
const { execSync } = require('child_process');
async function main() {
  const run = (command) => {
    try {
      execSync(command, { stdio: 'inherit' });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  const response = await prompts({
    type: 'select',
    name: 'manager',
    message: 'Choose your package manager',
    choices: [
      { title: 'yarn', value: 'yarn' },
      { title: 'pnpm', value: 'pnpm' },
    ],
    initial: 1,
  });

  run(`${response.manager} create next-app --typescript -e https://github.com/flumadev/nextjs-template`);
}
if (require.main === module) {
  main();
}
