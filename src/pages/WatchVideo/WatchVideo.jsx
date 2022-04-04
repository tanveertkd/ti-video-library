// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { embeddedLink } from '../../utils/video-details-services';
// import { videos } from '../../backend/db/videos';
// import { useHistory } from '../../context';

const WatchVideo = () => {
    const { videoId } = useParams();
    // const { setHistoryHandler } = useHistory();

    // useEffect(() => {
    //     let vid;
    //     videos.map((video) =>
    //         video._id === videoId
    //             ? vid = JSON.stringify({
    //                 id: video._id,
    //                 title: video.title,
    //                 description: video.description,
    //                 creator: video.creator,
    //                 creatorPhoto: video.creatorPhoto,
    //             })
    //             : {},
    //     );
    //     setHistoryHandler(vid);
    // }, [setHistoryHandler]);

    return (
        <div className="watch-container">
            <h2>Watch</h2>

            <iframe
                width="100%"
                src={embeddedLink(videoId)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="video-player"
            ></iframe>
        </div>
    );
};
export { WatchVideo };
