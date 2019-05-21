import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getTodo, createTodo } from '../actions/todo';
import { TodoState } from '../reducers/todo';

const App: React.FC = (props: any) => {
  const [keyword, setKeyword] = useState('');
  console.log(keyword);

  return (
    <div className="container">
      <p onClick={props.getTodo}>getTodo: {props.name}</p>
      <p onClick={props.createTodo}>createTodo</p>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={() => props.createTodo(keyword)}>addTodo</button>
    </div>
  );
};

const mapStateToProps = (state: TodoState) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTodo: bindActionCreators(getTodo, dispatch),
  createTodo: bindActionCreators(createTodo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
