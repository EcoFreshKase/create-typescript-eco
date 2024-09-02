#!/usr/bin/env node
const { exec } = require("./lib/fileExecutionUtil.js");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});

command_init_npm = `bash "${__dirname}/scripts/init_npm"`;

// exec(command_init_npm);
