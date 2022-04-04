import { HistoryCard } from '../../components/HistoryCard/HistoryCard';
import { useHistory } from '../../context';
import { Link } from 'react-router-dom';

import './History.css'

const History = () => {
    const { history, clearHistoryHandler } = useHistory();

    return (
        <div className="history-parent">
            <h2>History</h2>
            {history.data.length>0 ? (
                <button className='btn-cta' onClick={clearHistoryHandler}>Clear History</button>
            ) : ""}
           
            {history.data.length > 0 ? (
                history.data?.map((video) => <HistoryCard video={video} />)
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

export { History };
