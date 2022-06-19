import {open} from 'fs/promises';
import {join} from 'path';
import globalVar from '../../globalVar.js';

export default async function add(name) {
  let filePath = join(globalVar.currentWorkingDir, name);
  let file = await open(filePath, "wx");

  await file.close();
}
