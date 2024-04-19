import { CreateLogger } from './common';
import { config } from './config';

// eslint-disable-next-line ts/no-require-imports
if (!isKernel) require('./inject');

const Logger = new CreateLogger();
Logger.info('Starting...');

Logger.debug(config);
