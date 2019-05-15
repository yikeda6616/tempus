import { GET_TODO } from '../actions/todo';

interface TodoState {
  name: string;
}

export default function reducer(state: TodoState = { name: '' }, action: any): TodoState {
  switch (action.type) {
    case GET_TODO:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
