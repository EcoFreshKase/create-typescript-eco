#!/usr/bin/env node
const { exec } = require("../lib/fileExecutionUtil.js");
const readline = require("node:readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prevDirContents = fs.readdirSync(__dirname);
console.log(prevDirContents);

// Execute script
exec(`npx ./`);

// Wait until user finishes
rl.question(`Press any key to exit`, () => {
  rl.close();
});

// Delete all new files
const newFiles = fs.readdirSync(__dirname);
for (const file of newFiles) {
  if (prevDirContents.includes(file)) {
    continue;
  }

  const filePath = path.join(__dirname, file);
  if (fs.lstatSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath, { recursive: true });
  } else {
    fs.unlinkSync(filePath);
  }
}
