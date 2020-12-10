/**
 * Create the logMessage subscriber
 *
 * @returns {Function} Subscriber
 */
export default function logMessage() {
  return ({ time, message }) => {
    console.log(`${time}\t${message}`);
  }
}
