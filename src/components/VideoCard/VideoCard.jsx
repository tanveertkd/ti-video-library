import { useState } from 'react';
import { thumbnailLink } from '../../utils/video-details-services';
import { OverflowMenu } from '../OverflowMenu/OverflowMenu';
import { useNavigate } from 'react-router-dom';

import './VideoCard.css';
import { useHistory } from '../../context';

const VideoCard = ({ video }) => {
    const { setHistoryHandler } = useHistory();

    const reduceTitleLength = (title) => {
        if (title.length > 50) return title.substring(0, 47) + '...';
        return title;
    };

    const [overflowState, setOverflowState] = useState('overflow-inactive');

    const toggleOverflowMenu = () => {
        setOverflowState(() =>
            overflowState === 'overflow-inactive' ? 'overflow-active' : 'overflow-inactive',
        );
    };

    const navigate = useNavigate();

    return (
        <div
            className="video-card-container"
            key={video._id}
            onClick={() => {
                navigate(`/watch/${video._id}`);
                setHistoryHandler(video);
            }}
        >
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
                <div className="card-overflow-menu" onClick={toggleOverflowMenu}>
                    <i class="far fa-ellipsis-v"></i>
                    <div className={`${overflowState} overflow-container`}>
                        <OverflowMenu video={video} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { VideoCard };
