import { WebPlugin } from '@capacitor/core';

import type { bluetoothlePlugin } from './definitions';

export class bluetoothleWeb extends WebPlugin implements bluetoothlePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
