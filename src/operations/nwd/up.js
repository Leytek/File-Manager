import {join} from 'path';
import globalVar from '../../globalVar.js';

export default function up() {
  globalVar.currentWorkingDir = join(globalVar.currentWorkingDir, '..');
}
