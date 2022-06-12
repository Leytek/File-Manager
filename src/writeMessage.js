import globalVar from './globalVar.js';

export default function writeMessage(type) {
  const messages = {
    greeting: `Welcome to the File Manager, ${globalVar.user.name}!`,
    bye: `Thank you for using File Manager, ${globalVar.user.name}!`,
    cwd: `You are currently in ${globalVar.currentWorkingDir}`,
    prompt: 'Input operation:',
    invalidInput: 'Invalid input',
    opFail: 'Operation failed',
    ls: 'Current directory contains:',
  }
  console.log(messages[type] ?? 'Result:');
}
