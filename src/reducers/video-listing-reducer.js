const videoListReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_VIDEOS':
            return {
                ...state,
                data: action.payload,
            };

        case 'SINGLE_VIDEO':
            return {
                ...state,
                singleVideo: action.payload,
            };

        case 'SEARCHED_VIDEO':
            return {
                ...state,
                searchedVideo: action.payload,
            };
            
        default:
            return {
                ...state,
            };
    }
};

export { videoListReducer };
