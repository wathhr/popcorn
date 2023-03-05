import LoggerModule from '@utils/logger';

const Logger = new LoggerModule('Preload');

const preload = {
  start() {
    Logger.log('Preload');
  },
};

export default preload;
