import { GET_TODO, CREATE_TODO, INPUT_TODO } from '../actions/todo';

interface TodoState {
  name: string;
  keyword: string;
}

interface ActionType {
  type: string;
  name: string;
  keyword: string;
}

export default function reducer(state: TodoState = { name: '', keyword: '' }, action: ActionType): TodoState {
  switch (action.type) {
    case GET_TODO:
      return { ...state, name: action.name };

    case CREATE_TODO:
      return { ...state, name: action.name };

    case INPUT_TODO:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
}
