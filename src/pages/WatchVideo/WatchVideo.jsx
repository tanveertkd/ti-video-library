import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLike, useWatchLater } from '../../context';
import { useVideoProvider } from '../../context/video-listing-context';
import { embeddedLink } from '../../utils/';

import './WatchVideo.css';

const WatchVideo = () => {
    const { videoId } = useParams();
    const { videoListState, getVideoByIdHandler } = useVideoProvider();
    const { likedVideos, likeVideoHandler, removeFromLikes } = useLike();
    const { watchLaterState, addToWatchLaterHandler, removeFromWatchLaterHandler } =
        useWatchLater();

    useEffect(() => (async () => getVideoByIdHandler(videoId))(), []);

    const { title, description, creator, creatorPhoto } = videoListState.singleVideo;

    const alreadyLiked = likedVideos.data?.find((item) => item._id === videoId);
    const alreadyInWatchLater = watchLaterState.data?.find((item) => item._id === videoId);

    return (
        <div>
            <h2 className="watch-video-head">Watch</h2>
            <div className="watch-container">
                <div className="watch-container-left">
                    <iframe
                        width="100%"
                        src={embeddedLink(videoId)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="video-player-frame"
                    />
                    <div className="video-actions-panel">
                        <div className="video-details">
                            <div className="details-top">
                                <h3 className="video-card-head">{title}</h3>
                                <div className="action-container">
                                    <div className="video-action">
                                        <label
                                            for="action-icn"
                                            onClick={
                                                !alreadyLiked
                                                    ? () =>
                                                          likeVideoHandler(
                                                              videoListState.singleVideo,
                                                          )
                                                    : () => removeFromLikes(videoId)
                                            }
                                        >
                                            <i
                                                class={`${
                                                    alreadyLiked ? 'fas' : 'far'
                                                } fa-thumbs-up action-icn icn`}
                                            ></i>
                                            {alreadyLiked ? 'Dislike' : 'Like'}
                                        </label>
                                    </div>
                                    <div className="video-action">
                                        <label
                                            for="action-icn"
                                            onClick={
                                                !alreadyInWatchLater
                                                    ? () =>
                                                          addToWatchLaterHandler(
                                                              videoListState.singleVideo,
                                                          )
                                                    : () => removeFromWatchLaterHandler(videoId)
                                            }
                                        >
                                            <i
                                                class={`${
                                                    alreadyInWatchLater ? 'fas' : 'far'
                                                } fa-clock action-icn icn`}
                                            ></i>
                                            {alreadyInWatchLater ? 'Remove' : 'Watch Later'}
                                        </label>
                                    </div>
                                    <div className="video-action">
                                        <label for="action-icn">
                                            <i class="far fa-list action-icn icn"></i>
                                            Save
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="video-card-body-content">
                                <img
                                    src={creatorPhoto}
                                    alt="Thumbnail asset"
                                    className="creator-acc-thumb"
                                />
                                <p className="video-card-body">{creator}</p>
                            </div>
                            <p className="video-card-body">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="watch-container-right">
                    <div className="notes-container">
                        <div className="notes-header">Make a note!</div>
                        <div className="note">
                            <div className="notes-display"></div>
                            <input
                                name="notes-input"
                                className="notes-input"
                                placeholder="Note title"
                            />
                            <i class="fas fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export { WatchVideo };
