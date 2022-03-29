import { VideoCard } from '../../components/VideoCard/VideoCard';
import { useVideoProvider } from '../../context/video-listing-context';

import './VideoListing.css';

const Videos = () => {
    const { videoListState } = useVideoProvider();

    return (
        <div className="video-card-parent">
            {videoListState.data?.map((video) => (
                <VideoCard video={video} />
            ))}
        </div>
    );
};

export { Videos };
