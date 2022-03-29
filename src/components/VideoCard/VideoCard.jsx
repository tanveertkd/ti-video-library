import { thumbnailLink } from '../../utils/video-details-services';

import './VideoCard.css';

const VideoCard = ({ video }) => {

    const reduceTitleLength = (title) => {
        if(title.length > 50)
            return title.substring(0, 47)+'...';
        return title;
    };

    return (
        <div className="video-card-container" key={video._id}>
            <img
                src={thumbnailLink(video._id)}
                alt="Title asset"
                className="video-thumbnail-asset"
            />
            <div className="video-card-body">
                <img src={video.creatorPhoto} alt="Thumbnail asset" className="creator-acc-thumb" />
                <div className="video-details">
                    <p className="video-title">{reduceTitleLength(video.title)}</p>
                    <p className="creator-name">{video.creator}</p>
                </div>
                <div className="card-overflow-menu">
                    <i class="far fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    );
};

export { VideoCard };
