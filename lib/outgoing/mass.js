var send = require('../send');

var customUrl = 'https://api.weixin.qq.com/cgi-bin/message/mass/send?';

module.exports = {
  api: {
    text: function (app, toUsers, message, cb) {
      send(customUrl, app, {
        touser: toUsers,
        msgtype: 'text',
        text: {
          content: message
        }
      }, cb);
    },
    mpnews: function (app, toUsers, mediaId, cb) {
      send(customUrl, app, {
        touser: toUsers,
        mpnews: {
          media_id: mediaId
        }, 
        msgtype: 'mpnews'
      }, cb);
    },
    image: function (app, to, mediaId, cb) {
      send(customUrl, app, {
        touser: to,
        msgtype: 'image',
        image: {
          media_id: mediaId
        }
      }, cb);
    }
  }
};