const historyReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_HISTORY':
            return {
                ...state,
                data: action.payload,
            };
        case 'SET_HISTORY':
            return {
                ...state,
                data: action.payload,
            };
        case 'CLEAR_HISTORY':
            return {
                ...state,
                data: []
            }
        default:
            return {
                ...state,
            };
    }
};

export { historyReducer };