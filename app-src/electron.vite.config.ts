import { bytecodePlugin, defineConfig, externalizeDepsPlugin } from 'electron-vite';

// Re-add bytecodePlugin when updating electron versions, 22.3.26 causes errors for some reason?
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {},
});
