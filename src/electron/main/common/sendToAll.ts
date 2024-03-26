import { BrowserWindow } from 'electron';

export function sendToAll<T extends keyof $MappedMainAPI>(channel: T, ...args: ForceArr<$MappedMainAPI[T]>) {
  for (const window of BrowserWindow.getAllWindows()) {
    window.webContents.send(channel, ...args);
  }
}
