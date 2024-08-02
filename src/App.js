import { useReducer, useState } from 'react';
import reducer, { ADD_SENTENCE } from './reducer';

function App() {
  const [sentence, setSentence] = useState('');
  const [sentences, dispatch] = useReducer(reducer, []);

  function saveSentence(event) {
    event.preventDefault();

    dispatch({
      type: ADD_SENTENCE,
      sentence,
    });
  }

  return (
    <div className='App'>
      <form onSubmit={saveSentence}>
        <textarea
          value={sentence}
          onChange={(event) => setSentence(event.target.value)}
          placeholder='Type your sentence...'
          required
        />
        <br />
        <button>Save sentence</button>
      </form>
      {sentences.map((atualSentence, index) => (
        <p key={index}>{atualSentence}</p>
      ))}
    </div>
  );
}

export default App;
