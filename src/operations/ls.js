import {readdir} from 'fs/promises';
import globalVar from '../globalVar.js';

export default async function ls() {
  return `  ` + (await readdir(globalVar.currentWorkingDir)).join`\n  `;
}
