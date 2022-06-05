const getSearchedVideos = (videoList, searchTerm) => {
    return videoList?.filter((video) => video?.title?.toLowerCase().includes(searchTerm.toLowerCase()));
};

export { getSearchedVideos };
