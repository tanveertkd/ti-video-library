import { useLike } from '../../context';
import './OverflowMenu.css';

const OverflowMenu = (video) => {
    const { likedVideos, likeVideoHandler, removeFromLikes } = useLike();
    const alreadyLiked = likedVideos.data?.find((item) => item._id === video.video._id);
    return (
        <div className="overflow-menu-container">
            <ul className="overflow-ul">
                {!alreadyLiked ? (
                    <li className="overflow-li" onClick={() => likeVideoHandler(video.video)}>
                        Like
                    </li>
                ) : (
                    <li className="overflow-li" onClick={() => removeFromLikes(video.video)}>
                        Unlike
                    </li>
                )}
                {/* <li className="overflow-li" onClick={() => likeVideoHandler(video.video)}>
                    Like
                </li> */}
                <li className="overflow-li">Watch Later</li>
                <li className="overflow-li">Add to playlist</li>
            </ul>
        </div>
    );
};

export { OverflowMenu };
