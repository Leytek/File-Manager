import {access} from 'fs/promises';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';

export default async function cd(path) {
  let newPath = resolve(globalVar.currentWorkingDir, path);
  await access(newPath);
  globalVar.currentWorkingDir = resolve(globalVar.currentWorkingDir, path);
}
