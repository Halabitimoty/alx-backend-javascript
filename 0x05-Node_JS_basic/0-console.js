/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 */
const displayMessage = (msg) => {
  process.stdout(msg);
};

module.exports = displayMessage;
