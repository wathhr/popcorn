import { ipcMain } from 'electron';
import { ipc } from '&/common';

ipcMain.on(ipc('$getWindowData'), (event) => {
  event.returnValue = event.sender.originalWindowData!;
});
