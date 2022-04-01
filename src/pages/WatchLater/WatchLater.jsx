import { WatchLaterCard } from '../../components/WatchLaterCard/WatchLaterCard';
import { useWatchLater } from '../../context/watch-later-context';
import { Link } from 'react-router-dom';

import './WatchLater.css';

const Watchlater = () => {
    const {
        watchLaterState: { data },
    } = useWatchLater();
    return (
        <div className="watch-later-parent">
            <h2>Watch Later</h2>
            {data.length > 0 ? (
                data?.map((video) => <WatchLaterCard video={video} key={video._id} />)
            ) : (
                <div>
                    <h3>Seems a little empty in here. Why don't you explore some content?</h3>
                    <Link to="/">
                        <button className="btn-cta">Explore</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export { Watchlater };
