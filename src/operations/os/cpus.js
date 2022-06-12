import os from 'os';

export default async function cpus() {
  let num = os.cpus().length;
  return os.cpus().reduce((acc, cpu) => {
    let mod = cpu.model;
    let speed = cpu.speed / 1000;
    return acc + `Model: ${mod}, clock rate: ${speed} GHz\n`;
  }, `Total number of cpus: ${num}\n`);
}
