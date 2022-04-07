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

    const { playlistState, handleNewPlaylist, addToPlaylistHandler } =
        usePlaylist();

    return (
        <div className="playlist-modal">
            <div className="modal-top">
                <p>Save To</p>
                <div className="dismiss-icn">
                    <i class="far fa-times-circle" onClick={() => toggleModalVisibility(false)}></i>
                </div>
            </div>
            <hr />
            <div className="modal-main">
                {playlistState?.playlist?.map((item) => (
                    <label for="modal-checkbox">
                        <input
                            key={item._id}
                            type="checkbox"
                            name="checkbox"
                            id="modal-checkbox"
                            className="modal-checkbox"
                            value={userInput.title}
                            onChange={() => addToPlaylistHandler(item._id, video)}
                        />
                        {item.title}
                    </label>
                ))}
            </div>
            <div className="modal-bottom">
                <div className={playlistInput}>
                    <input
                        type="text"
                        className="playlist-name"
                        value={userInput.title}
                        onChange={(event) =>
                            setUserInput({ ...userInput, title: event.target.value })
                        }
                        required
                        placeholder='Enter playlist title'
                    />
                    <button
                        className="create-cta"
                        onClick={() => handleNewPlaylist(userInput)}
                    >
                        Create Playlist
                    </button>
                </div>
                <button className="btn-create-playlist" onClick={() => toggleInput()}>
                    Create New Playlist
                </button>
            </div>
        </div>
    );
};

export { PlaylistModal };
