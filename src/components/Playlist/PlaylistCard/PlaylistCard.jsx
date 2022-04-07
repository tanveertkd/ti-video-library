import { useNavigate } from 'react-router-dom';
import { thumbnailLink } from '../../../utils';

import './PlaylistCard.css';

const PlaylistCard = ({ playlist }) => {
    const navigate = useNavigate();
    return (
        <div
            className="playlist-card-parent"
            onClick={() => navigate(`/playlists/${playlist._id}`)}
        >
            <div className="card-thumb">
                <img
                    src={thumbnailLink(playlist?.videos[0]?._id)}
                    alt="playlist asset"
                    className="playlist-thumb"
                />
                <div className="playlist-length">{playlist.videos?.length}</div>
            </div>
            <div className="card-title">{playlist.title}</div>
        </div>
    );
};

export { PlaylistCard };
