import {readdir} from 'fs/promises';
import globalVar from '../../globalVar.js';

export default async function ls() {
  let pad = '  ';
  let dirContent = await readdir(globalVar.currentWorkingDir);
  return pad + dirContent.join('\n' + pad);
}
