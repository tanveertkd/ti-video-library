import { LikedVideoCard } from "../../components/LikedVideoCard/LikedVideoCard";
import { useLike } from "../../context";
import { Link } from "react-router-dom"
import "./LikedVideos.css";

const LikedVideos = () => {
    const { likedVideos: {data} } = useLike();
    return(
        <div className="liked-videos-parent">
            <h2>Liked Videos</h2>
            { data.length>0 ? data?.map(video => (
                <LikedVideoCard video={video} key={video._id} />
            )): (
                <div>
                    <h3>Seems a little empty in here. Why don't you explore some content?</h3>
                    <Link to="/">
                        <button className="btn-cta">Explore</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export { LikedVideos }