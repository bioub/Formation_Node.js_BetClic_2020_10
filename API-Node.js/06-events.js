const {EventEmitter} = require('events');

const events = new EventEmitter();

events.on('line', (line) => {
  console.log('on', line);
});

events.once('line', (line) => {
  console.log('once', line);
});

events.emit('line', 'ABC')
events.emit('line', 'DEF')
