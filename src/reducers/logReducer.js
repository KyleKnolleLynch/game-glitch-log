import uuid from 'uuid';

export const logReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_LOG':
      return [...state, {
        title: action.log.title,
        author: action.log.author,
        details: action.log.details,
        id: uuid()
      }]
    case 'REMOVE_LOG':
      return state.filter(log => log.id !== action.id)
    default:
      return state
  }
}

