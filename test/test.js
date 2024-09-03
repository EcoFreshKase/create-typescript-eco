#!/usr/bin/env node
const { exec } = require("../lib/fileExecutionUtil.js");
const readline = require("node:readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const prevDirContents = fs.readdirSync(__dirname);

  // Execute script
  exec(`npx ./`);

  // Wait until user finishes
  await getUserInput();

  // Delete all new files
  const newFiles = fs.readdirSync(__dirname);
  console.log(`New files: ${newFiles} ; Previous files: ${prevDirContents}`);
  for (const file of newFiles) {
    if (prevDirContents.includes(file)) {
      continue;
    }

    console.log("deleting", file);
    const filePath = path.join(__dirname, file);
    fs.rmSync(filePath, { recursive: true });
  }
})();

function getUserInput() {
  return new Promise((resolve) => {
    rl.question(`Press any key to exit`, () => {
      rl.close();
      resolve();
    });
  });
}
