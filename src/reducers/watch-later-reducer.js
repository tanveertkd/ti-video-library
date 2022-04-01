const watchLaterReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_WATCH_LATER':
            return {
                ...state,
                data: action.payload,
            };
        case 'ADD_TO_WATCH_LATER':
            return {
                ...state,
                data: action.payload,
            };
        
        case 'LOAD_AFTER_DELETE':
            return{
                ...state,
                data: action.payload,
            }

        case 'ALREADY_EXISTS':
            return {
                ...state,
            }
        default:
            return { ...state };
    }
};

export { watchLaterReducer };