export default function writeMessage(type, user) {
  const messages = {
    greeting: `Welcome to the File Manager, ${user.name}!`,
    bye: `Thank you for using File Manager, ${user.name}!`
  }
  console.log(messages[type]);
}
