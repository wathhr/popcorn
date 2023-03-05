import LoggerModule from '@utils/logger';

const Logger = new LoggerModule('Main', 'ansi');

const main = {
  start() {
    Logger.log('Main');
  },
};

export default main;
