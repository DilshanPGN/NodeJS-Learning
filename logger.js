const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {

    

    log(msg){
        //call event
        this.emit('messege', {id : uuid.v4() , msg} );
    };

}


module.exports = Logger;
