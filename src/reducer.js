export const ADD_SENTENCE = 'ADD_SENTENCE';
export const DELETE_SENTENCE = 'DELETE_SENTENCE';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_SENTENCE:
      if (action.sentence.length < 20) {
        alert('Sentences with less than 20 characters are not allowed.');
        return state;
      }

      if (state.includes(action.sentence)) {
        alert('Duplicate sentences are not allowed.');
        return state;
      }
      return [...state, action.sentence];
    case DELETE_SENTENCE:
      return state.filter((sentence) => sentence !== action.sentence);
    default:
      break;
  }
};

export default reducer;
