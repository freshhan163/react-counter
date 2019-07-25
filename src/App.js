import React from 'react';
import Counter from './pages/counter';
import RootApp from './pages/Root';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Counter--计数器</p>
        <Counter /> */}
        <p>异步action实例</p>
      </header>
      <RootApp />
    </div>
  );
}

export default App;
