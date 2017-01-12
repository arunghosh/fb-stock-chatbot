const
config = require('config'),
    request = require('request');


// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
    (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
    config.get('pageAccessToken');

module.exports = {
    callSendAPI: callSendAPI,
    getNewsMessage: getNewsMessage,
    sendTextMessage: sendTextMessage,
}

/*
 * Send a text message using the Send API.
 *
 */
function sendTextMessage(recipientId, messageText) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };

    callSendAPI(messageData);
}

/*
 * Call the Send API. The message data goes in the body. If successful, we'll 
 * get the message id in a response 
 *
 */
function callSendAPI(messageData, callback) {
    console.log(messageData)
    callback = callback || (() => {});
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;

            callback(null, "success");
            if (messageId) {
                console.log("Successfully sent message with id %s to recipient %s", 
                    messageId, recipientId);
            } else {
                console.log("Successfully called Send API for recipient %s", recipientId);
            }
        } else {
            console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
            callback(response);
        }
    });  
}


/**
 * Get generic template to show a news artcile
 */
function getNewsMessage(recipientId, articles) {
    var elements = articles.map((article) => {
        return {
            title: article.title,
            subtitle: article.summary,
            item_url: article.url,               
            image_url: article.image,
            buttons: [{
                type: "web_url",
                url: article.url,
                title: "Read on the website"
            }, {
                type: "postback",
                title: "Get me summary of '" + article.title + "'",
                payload: "summary__" + article.id,
            }]
        }
    })

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: elements
                }
            }
        }
    };  
    return messageData;
}
