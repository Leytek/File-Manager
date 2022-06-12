import {access, stat} from 'fs/promises';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';

export default async function cd(targetPath) {
  let path = resolve(globalVar.currentWorkingDir, targetPath);
  let pathStat = await stat(path);

  if(pathStat.isFile())
    throw new Error('Cannot change current directory: given path is file.');

  await access(path);
  globalVar.currentWorkingDir = path;
}
