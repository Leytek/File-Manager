import os from 'os';

export default function eol() {
  let eol = os.EOL === '\n' ? '\\n' :
            os.EOL === '\r\n' ? '\\r\\n' :
            "unknown";
  return eol;
}
