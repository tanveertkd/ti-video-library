import { LikedVideoCard } from "../../components/LikedVideoCard/LikedVideoCard";
import { useLike } from "../../context";

import "./LikedVideos.css";

const LikedVideos = () => {
    const { likedVideos: {data} } = useLike();
    return(
        <div className="liked-videos-parent">
            <h2>Liked Videos</h2>
            {data?.map(video => (
                <LikedVideoCard video={video} key={video._id} />
            ))}
        </div>
    );
}

export { LikedVideos }