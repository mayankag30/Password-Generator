#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Simple Password Generator");

// program
//   .command("generate")
//   .action(() => {
//     console.log("Generated");
//   })
//   .parse();

/*
Adding options (command, description)
 program.option("-l, --length", "length of password").parse();
*/

// If we also want the value with the options such as length value
// program.option("-l, --length <number>", "length of password").parse();

// Set a default value to the value of length, let's say = 8
// program.option("-l, --length <number>", "length of password", "8").parse();

// If we want to save the value and more such commands
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "Save Password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

// Get the value - print it
// console.log(program.opts());

const { length, save, numbers, symbols } = program.opts();

// Get generated Password
const generatePassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatePassword);
}

// Copy to Clipboard
clipboardy.writeSync(generatePassword);

// Output Generated Password
console.log(chalk.blue("Generated Password: ") + chalk.bold(generatePassword));
console.log(chalk.yellow("Password Copied to Clipboard"));
