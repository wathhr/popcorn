import { BrowserWindow } from 'electron';

export function sendToAll(channel: string, ...args: any[]) {
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send(channel, ...args);
  });
}
