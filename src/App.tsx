import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [message, setMessage] = useState('');
  
  const hints = [
    "It's a combination of front and back.",
    "Developers with this skillset are in high demand.",
    "It involves both client and server-side development.",
    "It starts with 'F'.",
    "It ends with 'k'.",
    "It has 10 letters.",
    "The second part is 'Stack'.",
    "The first part is 'Full'.",
    "It's a type of developer role.",
    "This word is often associated with web development."
  ];

  const handleGuess = () => {
    if (guess.toLowerCase() === 'fullstack') {
      setMessage('Congratulations! You guessed the word correctly.');
      setRevealed(true);
    } else {
      setCount(count + 1);
      if (count >= 9) {
        setMessage(`The word was: FullStack`);
        setRevealed(true);
      } else {
        setMessage(`Hint: ${hints[count]}`);
      }
    }
    setGuess('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess the Word Game</h1>
        {revealed ? (
          <p>{message}</p>
        ) : (
          <>
            <p>Try to guess the Group Name! You have 10 attempts.</p>
            <p>{message}</p>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              disabled={revealed}
            />
            <button onClick={handleGuess} disabled={revealed}>Submit Guess</button>
            <p>Attempts: {count}</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
