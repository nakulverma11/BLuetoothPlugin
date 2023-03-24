export interface bluetoothlePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
