import os from 'os';

export default async function homedir() {
  return os.homedir();
}
