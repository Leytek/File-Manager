import exit from './exit.js';
import up from './nwd/up.js';
import cd from './nwd/cd.js';
import ls from './nwd/ls.js';
import cat from './fs/cat.js';
import add from './fs/add.js';
import rn from './fs/rn.js';
import cp from './fs/cp.js';
import mv from './fs/mv.js';
import rm from './fs/rm.js';
import eol from './os/eol.js';

export default {
  '.exit': { argc: 0, operation: exit },
  up: { argc: 0, operation: up },
  cd: { argc: 1, operation: cd },
  ls: { argc: 0, operation: ls },
  cat: { argc: 1, operation: cat },
  add: { argc: 1, operation: add },
  rn: { argc: 2, operation: rn },
  cp: { argc: 2, operation: cp },
  mv: { argc: 2, operation: mv },
  rm: { argc: 1, operation: rm },
  'EOL': { argc: 0, operation: eol},
};
