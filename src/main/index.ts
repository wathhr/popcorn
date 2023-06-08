import fs from 'fs';
import { join } from 'path';
import { app } from 'electron';

// Inject CSS for the in-app UI
app.on('web-contents-created', (_, webContents) => {
  webContents.on('did-finish-load', () => {
    webContents.insertCSS(fs.readFileSync(join(__dirname, 'renderer.css'), 'utf8'));
  });
});

import './config';
import './protocol';
import './quickcss';
import './themes';
