const
    messenger = require('./messenger'),
    User = require('../apps/user/user.model');

module.exports = {
    sendNewsToUsers: sendNewsToUsers
}

/**
 * Send news to all registered users
 * TODO: send to all the users subscribed for that topic
 */
function sendNewsToUsers(news, callback) {
    console.log("sending news to users ...")
    User.find({}, function(err, users) {
        if(err) return callback(err)
        users.forEach(function(user) {
            console.log("####", user)
            let data = messenger.getNewsMessage(user.chatID, news);
            console.log(data)
            messenger.callSendAPI(data, () => {});
        });
    });
}

