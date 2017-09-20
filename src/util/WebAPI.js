import $ from 'jquery'

const WebApiUtil = {
  getList(page, receiveList){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "a8457610b68381085a3fff38d6a36337:6:74255139",
      'page': page
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      receiveList(result.response.docs);
    }).fail(function(err) {
      throw err;
    });
  },
};

module.exports = WebApiUtil;
