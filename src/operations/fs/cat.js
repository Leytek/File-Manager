import {open} from 'fs/promises';
import {once} from 'events';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';


export default async function cat(targetPath) {
  let filePath = resolve(globalVar.currentWorkingDir, targetPath);
  let file = await open(filePath);
  let stream = file.createReadStream();

  stream.pipe(process.stdout);
  await once(stream, 'end');
  process.stdout.write('\n');
}
