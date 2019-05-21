import axios from 'axios';

export const GET_TODO = 'GET_TODO';
export const CREATE_TODO = 'CREATE_TODO';

export function getTodo() {
  return async (dispatch: any) => {
    const res = await axios.get('api/todo/28c88f21-0337-4398-85b5-69639cfc9ab8');

    dispatch({
      type: GET_TODO,
      name: res.data.name,
    });
  };
}

export function createTodo(name: string) {
  return async (dispatch: any) => {
    await axios.post('api/todo/', { name: name });

    dispatch({
      type: CREATE_TODO,
      name: name,
    });
  };
}
