export const ADD_ITEM_TO_REGISTRY = 'ADD_ITEM_TO_REGISTRY'


export const createNewItemAction = (newItem) => ({
  type: ADD_ITEM_TO_REGISTRY,
  item: newItem
});

