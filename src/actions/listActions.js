import WebApiUtil from '../util/WebAPI'

const ListActions = {
  getList(page, receiveList){
    WebApiUtil.getList(page, receiveList);
  }
};

module.exports = ListActions;
