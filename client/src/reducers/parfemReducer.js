const initialState = {
    tip: '', 
  };
  
  const parfemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'POSTAVI_TIP_PARFEMA':
        return { ...state, tip: action.payload };
      default:
        return state;
    }
  };
  
  export default parfemReducer;
  