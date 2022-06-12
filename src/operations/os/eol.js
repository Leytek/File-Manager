import os from 'os';

export default function eol() {
  return JSON.stringify(os.EOL);
}
