const Logger = require('./logger');

const logger = new Logger();

logger.on('messege' , data => console.log('Called listner' , data));


logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');



