import { ipcMain } from 'electron';
import { ipc } from '#shared';

ipcMain.on(ipc('$getWindowData'), (event) => {
  event.returnValue = event.sender.originalWindowData!;
});
