import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTodo, createTodo, inputTodo } from '../actions/todo';

const App: React.FC = (props: any) => {
  const [localState, setKeyword] = useState({ keyword: '' });

  console.log(localState, props);

  return (
    <div>
      <p onClick={props.getTodo}>getTodo: {props.name}</p>
      <p onClick={props.createTodo}>createTodo</p>
      <input type="text" value={localState.keyword} onChange={e => setKeyword({ keyword: e.target.value })} />
      <button onClick={() => props.createTodo(localState.keyword)}>addTodo</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  name: state.name,
  keyword: state.keyword,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTodo: bindActionCreators(getTodo, dispatch),
  createTodo: bindActionCreators(createTodo, dispatch),
  inputTodo: bindActionCreators(inputTodo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
