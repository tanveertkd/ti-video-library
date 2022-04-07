import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHistory } from '../../../context';
import { usePlaylist } from '../../../context/playlist-context';
import { thumbnailLink, reduceTitleLength } from '../../../utils';
const SinglePlaylist = () => {
    const playlistId = useParams();
    const navigate = useNavigate();

    const {
        playlistState: { playlistsById },
        getPlaylistById,
        deleteFromPlaylistHandler
    } = usePlaylist();

    const { setHistoryHandler } = useHistory();

    useEffect(() => (async () => getPlaylistById(playlistId))());

    return (
        <div>
            <h3>Videos in {playlistsById?.title}</h3>

            {playlistsById?.videos?.length > 0 &&
                playlistsById?.videos.map((item) => (
                    <div className="watch-later-card" key={item._id}>
                        <div className="card-container card-img-horizontal">
                            <img
                                src={thumbnailLink(item._id)}
                                alt="Title asset"
                                className="video-thumbnail-asset"
                            />
                            <div className="card-body-content">
                                <h3 className="card-head">{reduceTitleLength(item.title, 50)}</h3>
                                <p className="card-body">
                                    {reduceTitleLength(item.description, 50)}
                                </p>
                                <p className="card-body">{item.creator}</p>
                                <div className="card-buttons">
                                    <button
                                        className="card-btn-buy card-btn"
                                        onClick={() => {
                                            navigate(`/watch/${item._id}`);
                                            setHistoryHandler(item);
                                        }}
                                    >
                                        Watch Now
                                    </button>
                                    <button
                                        className="card-btn-add card-btn"
                                        onClick={() => deleteFromPlaylistHandler(playlistId.playlistId, item._id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export { SinglePlaylist };
