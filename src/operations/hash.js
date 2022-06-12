import {resolve} from 'path';
import {open} from 'fs/promises';
import {createHash} from 'crypto';
import {once} from 'events';
import globalVar from '../globalVar.js';

export default async function hash(targetFilePath) {
  let filePath = resolve(globalVar.currentWorkingDir, targetFilePath);
  let file = await open(filePath);
  let fileStream = file.createReadStream();
  let hash = createHash('sha256');

  fileStream.pipe(hash);
  await once(fileStream, 'end');
  return hash.digest('hex');
}
