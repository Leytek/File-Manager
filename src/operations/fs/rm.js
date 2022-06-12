import fs from 'fs/promises';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';

export default async function rm(targetFilePath) {
  let filePath = resolve(globalVar.currentWorkingDir, targetFilePath);

  await fs.rm(filePath);
}
