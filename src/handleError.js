import writeMessage from "./writeMessage.js";

export default function handleError(e) {
  if (e === 'opFail')
    writeMessage(e);
  else
    writeMessage('invalidInput');
}
