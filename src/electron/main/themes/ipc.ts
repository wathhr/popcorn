import { ipcMain } from 'electron';
import { getThemes } from '.';
import { ipc } from '#shared';

ipcMain.handle(ipc('getThemes'), () => getThemes());
