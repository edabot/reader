import WebApiUtil from '../util/WebAPI'

const ListActions = {
  getList(page, searchTerm, receiveList){
    if ( searchTerm.length === 0 ) {
      WebApiUtil.getList(page, receiveList);      
    } else {
      WebApiUtil.getSearchList(page, searchTerm, receiveList)
    }
  }
};

module.exports = ListActions;
