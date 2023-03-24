import { registerPlugin } from '@capacitor/core';

import type { bluetoothlePlugin } from './definitions';

const bluetoothle = registerPlugin<bluetoothlePlugin>('bluetoothle', {
  web: () => import('./web').then(m => new m.bluetoothleWeb()),
});

export * from './definitions';
export { bluetoothle };
