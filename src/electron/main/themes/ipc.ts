import { ipcMain } from 'electron';
import { getThemes } from '.';
import { ipc } from '&/common';

ipcMain.handle(ipc('getThemes'), () => getThemes());
