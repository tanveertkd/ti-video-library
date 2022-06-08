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
                playlist: state.playlist.map((singlePlaylist) =>
                    singlePlaylist._id === action.payload.response._id
                        ? action.payload.response
                        : singlePlaylist,
                ),
                exists: action.payload.exists,
            };

        case 'AFTER_DELETE':
            return {
                ...state,
                playlist: action.payload,
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
