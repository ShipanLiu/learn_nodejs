const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const event = new MyEventEmitter()


// publish
event.on('play', (value) => {
  console.log(value);
})


// 只触发一次
event.once('play2', (value) => {
  console.log(value);
})


// subscribe
event.emit('play', 'movie')

event.emit('play2', 'once')
event.emit('play2', 'once')
event.emit('play2', 'once')
event.emit('play2', 'once')
