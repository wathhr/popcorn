import { ipcMain } from 'electron';

console.log('main');

ipcMain.handle('POPCORN_GET_THEME', async (event) => {

  event.sender.send('');
  
  return {};
});
