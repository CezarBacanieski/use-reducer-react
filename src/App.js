import { useState } from 'react';

function App() {
  // list of phrases

  // the user can add new phrases, as long as:
  // the phrase has more than 20 characters
  // the phrase must be unique

  const [sentence, setSentence] = useState('');
  const [sentences, setSentences] = useState([]);

  function saveSentence(event) {
    event.preventDefault();

    if (sentence.length < 20) {
      alert('Sentences with less than 20 characters are not allowed.');
      return;
    }

    if (sentences.includes(sentence)) {
      alert('Duplicate sentences are not allowed.');
    }

    setSentences([...sentences, sentence]);
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
