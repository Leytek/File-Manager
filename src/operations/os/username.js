import os from 'os';

export default function username() {
  return os.userInfo().username;
}
