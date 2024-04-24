import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { contextBridge, ipcRenderer, webFrame } from 'electron/renderer';
import { ipc } from '#shared';

const windowData = ipcRenderer.sendSync(ipc('$getWindowData'));

const hasContextIsolation = windowData.windowOptions.webPreferences!.contextIsolation ?? true;
if (!hasContextIsolation) contextBridge.exposeInMainWorld = (key, value) => {
  // @ts-expect-error no way to type this properly
  window[key] = value;
};

require(windowData.originalPreload);

const rendererScript = readFileSync(join(__dirname, 'renderer.js'), 'utf8');
webFrame.top?.executeJavaScript(rendererScript);
