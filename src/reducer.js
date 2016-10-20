import {combineReducers} from 'redux';
import {ADD_ITEM_TO_REGISTRY, createNewItemAction} from './actions'


const registryItems = (state = [], action) => {
  switch(action.type){
    case ADD_ITEM_TO_REGISTRY:
      return state.concat(action.item);
    default:
      return state;
  }

}

export default combineReducers({
  registryItems
})
