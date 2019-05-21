import { GET_TODO, CREATE_TODO } from '../actions/todo';

export interface TodoState {
  name: string;
}

interface ActionType {
  type: string;
  name: string;
}

export default function reducer(state: TodoState = { name: '' }, action: ActionType): TodoState {
  switch (action.type) {
    case GET_TODO:
      return { ...state, name: action.name };

    case CREATE_TODO:
      return { ...state, name: action.name };

    default:
      return state;
  }
}
