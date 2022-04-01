import { useLike, useAuth, useWatchLater } from '../../context';
import { useNavigate } from 'react-router-dom';
import './OverflowMenu.css';

const OverflowMenu = ({ video }) => {
    const { likedVideos, likeVideoHandler, removeFromLikes } = useLike();
    const { watchLaterState, addToWatchLaterHandler, removeFromWatchLaterHandler } = useWatchLater();

    const { auth } = useAuth();
    const navigate = useNavigate();

    const alreadyLiked = likedVideos.data?.find((item) => item._id === video._id);
    const alreadyInWatchLater = watchLaterState.data?.find((item) => item._id === video._id);

    return (
        <div className="overflow-menu-container">
            <ul className="overflow-ul">
                <li
                    className="overflow-li"
                    onClick={
                        auth
                            ? alreadyLiked
                                ? () => removeFromLikes(video._id)
                                : () => likeVideoHandler(video)
                            : () => navigate('/login')
                    }
                >
                    {!alreadyLiked ? 'Like' : 'Unlike'}
                </li>

                <li
                    className="overflow-li"
                    onClick={
                        auth
                            ? alreadyInWatchLater
                                ? () => removeFromWatchLaterHandler(video._id)
                                : () => addToWatchLaterHandler(video)
                            : () => navigate('/')
                    }
                >
                    {!alreadyInWatchLater ? 'Watch Later' : 'Remove from Watch Later'}
                </li>
                <li className="overflow-li">Add to playlist</li>
            </ul>
        </div>
    );
};

export { OverflowMenu };
