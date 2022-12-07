#!/usr/bin/env node
const program = require('commander')
const pkg=require('../package.json');
program.version(pkg.version)
.command('key','Manage API key -- https:coinapi.com')
.command('check','Check Coin Price info')
.parse(process.argv);

