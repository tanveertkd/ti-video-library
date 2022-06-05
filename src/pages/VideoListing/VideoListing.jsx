import { VideoCard } from '../../components/VideoCard/VideoCard';
import { useVideoProvider } from '../../context/video-listing-context';
import { getSearchedVideos } from '../../utils';

import './VideoListing.css';

const Videos = () => {
    const { videoListState } = useVideoProvider();

    const searchedVideos = getSearchedVideos(videoListState.data, videoListState.searchedVideo)

    return (
        <div className="video-card-parent">
            {searchedVideos?.map((video) => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    );
};

export { Videos };
