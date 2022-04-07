const playlistReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PLAYLISTS':
            return {
                ...state,
                playlist: action.payload,
            };

        case 'FETCH_PLAYLISTS_BY_ID':
            return {
                ...state,
                playlistsById: action.payload,
            };

        case 'CREATE_PLAYLIST':
            return {
                ...state,
                playlist: action.payload,
            };

        case 'ADD_VIDEO_TO_PLAYLIST':
            return {
                ...state,
                playlist: action.payload.response,
                exists: action.payload.exists,
            };

        case 'DELETE_FROM_PLAYLIST':
            return {
                ...state,
                playlist: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export { playlistReducer };
