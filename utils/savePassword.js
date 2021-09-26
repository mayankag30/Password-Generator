const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  // 'a' means that we have to append to the existing data
  // 666 is the permission
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    // EOL - End of Line, same as "\n" for the new line character
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved to Passwords.txt"));
      });
    });
  });
};

module.exports = savePassword;
