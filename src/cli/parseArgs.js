export default function () {
  let args = process.argv.slice(2);
  let argsProposal = {};

  for (let arg of args) {
    if (arg.startsWith('--')) {
      let [key, value = null] = arg.slice(2).split('=');
      argsProposal[key] = value;
    }
  }
  return argsProposal;
}
