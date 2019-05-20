import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTodo } from '../actions/todo';

const App: React.FC = (props: any) => {
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
