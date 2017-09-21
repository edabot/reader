import $ from 'jquery'
import ApiConstants from './constants'

const WebApiUtil = {
  getList(page, receiveList){
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    let day = oneWeekAgo.getDate().toString()
    let month = oneWeekAgo.getMonth().toString()
    if ( day.length === 1) { day = "0" + day }
    if ( month.length === 1) { month = "0" + month }
    let startDate = oneWeekAgo.getFullYear().toString() + month + day

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': ApiConstants.KEY,
      'begin_date': startDate,
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
