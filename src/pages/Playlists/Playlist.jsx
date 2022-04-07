import { PlaylistCard } from '../../components/Playlist/PlaylistCard/PlaylistCard';
import { usePlaylist } from '../../context/playlist-context';
import './Playlist.css';

const Playlist = () => {
    const {
        playlistState: { playlist },
    } = usePlaylist();

    return (
        <div className="playlist-container">
            <h2>Playlists</h2>
            <div className="playlist">
                {playlist.length > 0 ? (
                    playlist?.map((playlistItem) => (
                        <div key={playlistItem._id}>
                            <PlaylistCard playlist={playlistItem} />
                        </div>
                    ))
                ) : (
                    <h3 className="empty">No playlists created</h3>
                )}
            </div>
        </div>
    );
};

export { Playlist };
