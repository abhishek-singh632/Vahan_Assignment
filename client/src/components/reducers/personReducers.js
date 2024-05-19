// Initial state
const initialState = {
    personList: [],
    loading: false,
    error: null
  };
  
  // Reducer function
  const personReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PERSON_LIST_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_PERSON_LIST_SUCCESS':
        return {
          ...state,
          personList: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_PERSON_LIST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      // Add more cases for other actions if needed
      default:
        return state;
    }
  };
  
  export default personReducer;
  