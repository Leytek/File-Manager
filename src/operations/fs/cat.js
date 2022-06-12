import {open} from 'fs/promises';
import events from 'events';
import {resolve} from 'path';
import globalVar from '../../globalVar.js';


export default async function cat(path) {
  let filePath = resolve(globalVar.currentWorkingDir, path);
  let file = await open(filePath);
  let stream = file.createReadStream();

  stream.pipe(process.stdout);
  await events.once(stream, 'end');
  process.stdout.write('\n');
}
