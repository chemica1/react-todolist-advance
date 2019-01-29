import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
      <TodoTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoTemplate>
    );
  }
}

export default App;