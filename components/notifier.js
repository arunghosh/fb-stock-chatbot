

function sendNewsToUser(news, userId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [{
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
                            title: "Get summary",
                            payload: "summary__" + article.id,
                        }]
                    }]
                }
            }
        }
    };  

}
