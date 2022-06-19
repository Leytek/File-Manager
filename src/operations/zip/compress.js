import {open} from 'fs/promises';
import {once} from 'events';
import {resolve} from 'path';
import {createBrotliCompress} from 'zlib';
import globalVar from '../../globalVar.js';


export default async function compress(sourceFilePath, destinationFilePath) {
  let sourcePath = resolve(globalVar.currentWorkingDir,sourceFilePath);
  let destinationPath = resolve(globalVar.currentWorkingDir, destinationFilePath);
  let sourceFile = await open(sourcePath);
  let destinationFile = await open(destinationPath, 'w');
  let source = sourceFile.createReadStream();
  let destination = destinationFile.createWriteStream();
  let zip = createBrotliCompress();

  source.pipe(zip).pipe(destination);
  await once(destination, 'finish');
}
