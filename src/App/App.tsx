import React from 'react';
import './App.css';
import Task1 from '../Task1/Task1';
import Task2 from '../Task2/Task2';

function App() {
  return (
    <div className="App">
      <h1 className="Task">Задание 1: При нажатии менять название кнопки.</h1>
      <Task1 />
      <h1 className="Task">Задание 2: Разработать страницу заказа пиццы.</h1>
      <Task2 />
    </div>
  );
}

export default App;
