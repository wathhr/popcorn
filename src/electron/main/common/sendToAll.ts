import { BrowserWindow } from 'electron';
import type { ForceArr } from '~/types/utils';

export function sendToAll<T extends keyof $PopcornInternals.MappedMainAPI>(channel: T, ...args: ForceArr<$PopcornInternals.MappedMainAPI[T]>) {
  for (const window of BrowserWindow.getAllWindows()) {
    window.webContents.send(channel, ...args);
  }
}
