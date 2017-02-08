const messenger = require('./messenger')
var expect = require('chai')

var assert = require('assert');
describe('messenger', function() {
  describe('#getNewsMessage()', function() {
    it('should have elements count equal to news count', function() {
      var news = [{
        title: "abcd"
      }, {
        title: "xyz"
      }]
      var message = messenger.getNewsMessage(23233, news);
      assert.equal(news.length, message.message.attachment.payload.elements.length);
    });


    it('should have field like title, url', function() {
      var news = [{
        title: "abcd",
        url: 'http://abcd.com'
      }, {
        title: "xyz",
        url: 'http://xyz.com'
      }]
      var message = messenger.getNewsMessage(23233, news);
      news.forEach((n, i) => {
        assert.equal(n.title, message.message.attachment.payload.elements[i].title);
        assert.equal(n.url, message.message.attachment.payload.elements[i].item_url);
      })
    });
  });
});


