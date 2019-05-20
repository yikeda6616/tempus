import { GET_TODO } from '../actions/todo';

interface TodoState {
  name: string;
}

export default function reducer(state: TodoState = { name: '' }, action: { type: string; name: string }): TodoState {
  switch (action.type) {
    case GET_TODO:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
