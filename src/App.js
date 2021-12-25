import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Row,
  Col,
  Container
} from 'reactstrap';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Quiz from './components/Quiz';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <Quiz />
      </div>
    </DndProvider>
  );
}

export default App;
