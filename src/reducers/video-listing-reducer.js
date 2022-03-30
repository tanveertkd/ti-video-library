const videoListReducer = (state, action) => {
    switch(action.type){
        case "LOAD_VIDEOS":
            return{
                ...state,
                data: action.payload
            }
        default:
            return{
                ...state
            }
    }
} 

export {videoListReducer};