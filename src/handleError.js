import writeMessage from './writeMessage.js';

export default function handleError(e) {
  if (e.type === 'opFail')
    writeMessage(e.type, e.message);
  else
    writeMessage('invalidInput', e.message);
}
