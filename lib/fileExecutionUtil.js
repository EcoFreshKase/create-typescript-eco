const childProcess = require("child_process");

const exec = (cmd) =>
  childProcess.execSync(cmd, {
    encoding: "utf8",
    stdio: ["inherit", "inherit", "inherit"],
  });

module.exports = { exec };
