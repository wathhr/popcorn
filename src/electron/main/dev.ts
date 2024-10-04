import r from 'node:repl';
import { CreateLogger } from './common';

const Logger = new CreateLogger();

// TODO: Expose useful functions
const repl = r.start('');
repl.on('close', () => process.exit());
Logger.log('REPL started');
