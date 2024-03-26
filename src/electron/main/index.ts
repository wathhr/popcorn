import { CreateLogger } from './common';
import { config } from './config';

const Logger = new CreateLogger();

Logger.info('Starting...');

Logger.debug(config);
