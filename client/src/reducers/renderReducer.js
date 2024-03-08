const initialState = {
    render: false, 
  };
  
  const renderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UCITAJ_PONOVO':
        return { ...state, render: !(state.render) };
      default:
        return state;
    }
  };
  
  export default renderReducer;
  