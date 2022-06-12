import exit from './exit.js';
import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';

export default {
  '.exit': { argc: 0, operation: exit },
  up: { argc: 0, operation: up },
  cd: { argc: 1, operation: cd },
  ls: { argc: 0, operation: ls },
};
