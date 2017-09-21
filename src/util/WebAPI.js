import $ from 'jquery'
import ApiConstants from './constants'

const WebApiUtil = {
  getList(page, receiveList){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    debugger
    url += '?' + $.param({
      'api-key': ApiConstants.KEY,
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

  getSearchList(page, searchTerm, receiveList){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': ApiConstants.KEY,
      'q': searchTerm,
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
