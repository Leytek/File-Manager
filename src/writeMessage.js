import globalVar from "./globalVar.js";

export default function writeMessage(type) {
  const messages = {
    greeting: `Welcome to the File Manager, ${globalVar.name}!`,
    bye: `Thank you for using File Manager, ${globalVar.name}!`,
    invalidInput: 'Invalid input',
    opFail: 'Operation failed',
  }
  console.log(messages[type]);
}
