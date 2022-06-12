import {rename} from 'fs/promises';
import path from 'path';
import globalVar from '../../globalVar.js';

export default async function rn(targetPath, newName) {
  let filePath = path.resolve(globalVar.currentWorkingDir, targetPath);
  let dir = path.dirname(filePath);
  let newFilePath = path.join(dir, newName);

  await rename(filePath, newFilePath);
}
