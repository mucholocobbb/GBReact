import './App.css'
import { useState } from 'react'
import { Message } from './components/test'

function App() {
  const [text, setText] = useState('i am prop')

  const handleClick = () => {
    setText('New' + Math.random().toFixed(2))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a Header</h1>
      </header>
      <div className="App-main">
        <h1>I am a MainBlock</h1>

        <Message message={text} onMassageClick={handleClick}/>

      </div>
      <footer className="App-footer">
        <h1>I am a Footer</h1>
      </footer>
    </div>
  );
}

export default App;
