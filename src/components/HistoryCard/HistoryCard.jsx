import { useHistory } from '../../context';
import { thumbnailLink } from '../../utils/video-details-services';
import './HistoryCard.css';

const HistoryCard = ({ video }) => {
    const { _id, title, description, creator } = video;

    const reduceTitleLength = (title) => {
        if (title.length > 50) return title.substring(0, 47) + '...';
        return title;
    };
    
    const {removeFromHistoryHandler} = useHistory();

    return (
        <div className="card">
            <div className="card-container card-img-horizontal">
                <img src={thumbnailLink(_id)} alt="Title asset" className="video-thumbnail-asset" />
                <div className="card-body-content">
                    <h3 className="card-head">{reduceTitleLength(title)}</h3>
                    <p className="card-body">{reduceTitleLength(description)}</p>
                    <p className="card-body">{creator}</p>
                    <div className="card-buttons">
                        <button className="card-btn-buy card-btn">Watch Now</button>
                        <button className="card-btn-add card-btn" onClick={() => removeFromHistoryHandler(_id)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {HistoryCard};
