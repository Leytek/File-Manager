import {copyFile, rename} from 'fs/promises';
import path from 'path';
import globalVar from '../../globalVar.js';

export default async function mv(targetFilePath, newDirPath) {
  let source = path.resolve(globalVar.currentWorkingDir, targetFilePath);
  let dirPath = path.resolve(globalVar.currentWorkingDir, newDirPath);
  let fileName = path.basename(source);
  let destination = path.join(dirPath, fileName);

  await rename(source, destination);
}
