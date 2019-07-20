#!/usr/bin/env node

var asciiCats = require('./')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('C A T   M E\nprint a cat to your console\n' + asciiCats())
  .example('asciiCats')
  .example('asciiCats nyan')
  .alias('c', 'cats')
  .describe('c', 'get list of cat names')
  .argv

var choice = argv._.join(' ')

var output = argv.c ? 'CAT OPTIONS: ' + asciiCats.catNames.join(', ') : asciiCats(choice)

process.stdout.write(output)
process.stdout.write('\n')
