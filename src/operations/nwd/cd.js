import {access} from 'fs/promises';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';

export default async function cd(targetPath) {
  let newCWD = resolve(globalVar.currentWorkingDir, targetPath);
  await access(newCWD);
  globalVar.currentWorkingDir = newCWD;
}
