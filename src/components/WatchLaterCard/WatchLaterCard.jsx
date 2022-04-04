import { useNavigate } from 'react-router-dom';
import { useHistory } from '../../context';
import { useWatchLater } from '../../context/watch-later-context';
import { thumbnailLink } from '../../utils/video-details-services';
import { reduceTitleLength } from '../../utils/';
import './WatchLaterCard.css';

const WatchLaterCard = ({ video }) => {
    const { _id, title, description, creator } = video;
    const { removeFromWatchLaterHandler } = useWatchLater();
    const { setHistoryHandler } = useHistory();

    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="card-container card-img-horizontal">
                <img src={thumbnailLink(_id)} alt="Title asset" className="video-thumbnail-asset" />
                <div className="card-body-content">
                    <h3 className="card-head">{reduceTitleLength(title, 50)}</h3>
                    <p className="card-body">{reduceTitleLength(description, 50)}</p>
                    <p className="card-body">{creator}</p>
                    <div className="card-buttons">
                        <button className="card-btn-buy card-btn"
                        onClick={() => {
                            navigate(`/watch/${video._id}`);
                            setHistoryHandler(video);
                        }}
                        >Watch Now</button>
                        <button
                            className="card-btn-add card-btn"
                            onClick={() => removeFromWatchLaterHandler(video._id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { WatchLaterCard };
