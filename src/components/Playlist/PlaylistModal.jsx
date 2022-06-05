import { useState } from 'react';
import { usePlaylist } from '../../context/playlist-context';
import './PlaylistModal.css';

const PlaylistModal = ({ video, toggleModalVisibility }) => {
    const [playlistInput, togglePlaylistInput] = useState('modal-bottom-input-inactive');

    const toggleInput = () =>
        togglePlaylistInput(
            playlistInput === 'modal-bottom-input-inactive'
                ? 'modal-bottom-input'
                : 'modal-bottom-input-inactive',
        );

    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
    });

    const { playlistState, handleNewPlaylist, addToPlaylistHandler } = usePlaylist();

    const doesVideoExist = (playlist) => playlist.videos.find((singleVideo) => singleVideo._id === video._id);

    return (
        <div className="playlist-modal">
            <div className="modal-top">
                <p>Save To</p>
                <div className="dismiss-icn">
                    <i
                        className="far fa-times-circle dismiss-cross-icn"
                        onClick={() => toggleModalVisibility(false)}
                    ></i>
                </div>
            </div>
            <hr />
            <div className="modal-main">
                {playlistState?.playlist?.map((item) => (
                    <label className="modal-label" key={item._id}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            className="modal-checkbox"
                            value={userInput.title}
                            checked={doesVideoExist(item, video._id) ? true : false}
                            onChange={() => addToPlaylistHandler(item._id, video)}
                        />
                        {item.title}
                    </label>
                ))}
            </div>
            <div className="modal-bottom">
                <div className={playlistInput}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleNewPlaylist(userInput);
                            setUserInput({ ...userInput, title: '' });
                        }}
                    >
                        <input
                            type="text"
                            className="playlist-name"
                            required
                            value={userInput.title}
                            onChange={(event) =>
                                setUserInput({ ...userInput, title: event.target.value })
                            }
                            placeholder="Enter playlist title"
                        />
                        <button
                            className="create-cta"
                            // onClick={() => handleNewPlaylist(userInput)}
                        >
                            Create Playlist
                        </button>
                    </form>
                </div>
                <button className="btn-create-playlist" onClick={() => toggleInput()}>
                    Create New Playlist
                </button>
            </div>
        </div>
    );
};

export { PlaylistModal };
