const validKeys = [
    'username'
];

export default function validateArgs(argsProposal) {
  for (let [key, value] of Object.entries(argsProposal))
    if (validKeys.includes(key) && value)
      this.args[key] = value;
    else console.log(`Invalig CLI argument --${key}=${value}`);
}
