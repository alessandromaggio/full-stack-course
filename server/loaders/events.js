import globalEmitter from './eventEmitter';
import loadListeners from '../subscribers';

export default function async ({ app }) {
  loadListeners(globalEmitter);
  return app;
}
