import logo from './logo.svg';
import './App.css';

function App() {
  // list of phrases

  // the user can add new phrases, as long as:
  // the phrase has more than 20 characters
  // the phrase must be unique

  return (
    <div className='App'>
      <form>
        <textarea required />
        <br />
        <button>Save phrase</button>
      </form>
    </div>
  );
}

export default App;
