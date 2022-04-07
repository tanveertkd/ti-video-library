import { useNavigate } from 'react-router-dom';
import { usePlaylist } from '../../../context/playlist-context';
import { thumbnailLink } from '../../../utils';

import './PlaylistCard.css';

const PlaylistCard = ({ playlist }) => {
    const navigate = useNavigate();
    const { deletePlaylistHandler } = usePlaylist();
    return (
        <div className="playlist-card-parent">
            <div className="card-top" onClick={() => navigate(`/playlists/${playlist._id}`)}>
                <div className="card-thumb">
                    <img
                        src={thumbnailLink(playlist?.videos[0]?._id)}
                        alt="playlist asset"
                        className="playlist-thumb"
                    />
                    <div className="playlist-length">{playlist.videos?.length}</div>
                </div>
            </div>

            <div className="card-bottom">
                <div className="card-title">{playlist.title}</div>
                <i
                    class="fas fa-trash delete-playlist"
                    onClick={() => deletePlaylistHandler(playlist._id)}
                ></i>
            </div>
        </div>
    );
};

export { PlaylistCard };
