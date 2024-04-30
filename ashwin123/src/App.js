import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
import './App.css';


ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <div>
      <Header />
      {/* Other components or content */}
    </div>
  );
}

export default App;
