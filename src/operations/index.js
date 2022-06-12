import exit from './exit.js';
import up from './nwd/up.js';
import cd from './nwd/cd.js';
import ls from './nwd/ls.js';
import cat from './fs/cat.js';

export default {
  '.exit': { argc: 0, operation: exit },
  up: { argc: 0, operation: up },
  cd: { argc: 1, operation: cd },
  ls: { argc: 0, operation: ls },
  cat: { argc: 1, operation: cat },
};
