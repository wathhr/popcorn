import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { ipcRenderer, webFrame } from 'electron';
import { ipc } from '#shared';

const windowData = ipcRenderer.sendSync(ipc('$getWindowData'));
require(windowData!.originalPreload);

const rendererScript = readFileSync(join(__dirname, 'renderer.js'), 'utf8');
webFrame.executeJavaScript(rendererScript);
