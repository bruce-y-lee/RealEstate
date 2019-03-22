const moment = require('moment');


var generateMessage = (from, text, to) => {
    return {
      from,
      text,
      to,
      createdAt: moment().valueOf()
    };
  };
  
  module.exports = {generateMessage}