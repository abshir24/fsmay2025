import logo from './logo.svg';
import './App.css';
import EventHandler from './components/ReactAssignment8/EventHandler';
import ListRenderer from './components/ReactAssignment9/ListRenderer';

function App() {
  let isVisible = true

  return (
      <h1>{ isVisible === true ? "Component is visible": "Component is not visible" }</h1>
  );
}

export default App;
