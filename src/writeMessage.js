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
    add: 'File created!',
    rn: 'File renamed!',
    cp: 'File copied!',
    mv: 'File moved!',
    rm: 'File removed!',
    EOL: 'End of line:',
    cpus: 'Cpu info:',
    homedir: 'Home directory:',
    username: 'System user name:',
    architecture: 'CPU architecture:',
    hash: 'SHA256 hash of file:',
    compress: 'File compressed!',
    decompress: 'File decompressed!',
  }
  if (messages[type])
    console.log(messages[type]);
}
