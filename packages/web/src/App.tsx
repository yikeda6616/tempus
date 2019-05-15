import React, { useState } from 'react';
import axios from 'axios';
import { getTodo } from './actions/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const App: React.FC = (props: any) => {
  // const [todo, setTodo] = useState({ name: '' });

  // async function createTodo() {
  //   const res = await axios.post('api/todo/', {
  //     name: 'halloaxios',
  //   });
  //   console.log(res);
  // }

  // async function getTodo() {
  //   const res = await axios.get('api/todo/28c88f21-0337-4398-85b5-69639cfc9ab8');
  //   console.log(res.data);
  //   setTodo(res.data);
  // }

  return (
    <div>
      <p onClick={props.getTodo}>getTodo: {props.name}</p>
      {/* <p onClick={createTodo}>createTodo</p> */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTodo: bindActionCreators(getTodo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
