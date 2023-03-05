import LoggerModule from '@utils/logger';

const Logger = new LoggerModule('Renderer');

const preload = {
  start() {
    Logger.log('Renderer');
  },
};

export default preload;
