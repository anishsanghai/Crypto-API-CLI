const program = require('commander');
const key= require('../commands/key')
program.command('set').description('set API Key -- Get at https:coinapi.com').action(key.set);
program.command('show').description('show your api key').action(key.show);
program.command('remove').description('Remove your api key').action(key.remove);
program.parse(process.argv);