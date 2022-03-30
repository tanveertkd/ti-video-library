import "./OverflowMenu.css"

const OverflowMenu = () => {
    return(
        <div className="overflow-menu-container">
            <ul className="overflow-ul">
                <li className="overflow-li">Like</li>
                <li className="overflow-li">Watch Later</li>
                <li className="overflow-li">Add to playlist</li>
            </ul>
        </div>
    );
}

export {OverflowMenu};