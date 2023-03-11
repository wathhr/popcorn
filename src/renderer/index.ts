import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Renderer');

const preload = {
  async start() {
    Logger.log(await PopcornNative.getThemes());
  },
};

export default preload;
