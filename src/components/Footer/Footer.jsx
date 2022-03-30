import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <ul className="footer-socials-list">
                    <li className="footer-item footer-item-header">
                        <i className="far fa-code"></i> Tanveer Hazarika
                    </li>
                    <div className="footer-item-container">
                        <li className="footer-item">
                            <i className="fab fa-github fa-lg social-icn"></i>
                        </li>
                        <li className="footer-item">
                            <i className="fab fa-linkedin fa-lg social-icn"></i>
                        </li>
                        <li className="footer-item">
                            <i className="fab fa-twitter fa-lg social-icn"></i>
                        </li>

                        <li className="footer-item">
                            <i className="fas fa-globe fa-lg social-icn"></i>
                        </li>
                    </div>
                </ul>
            </footer>
        </div>
    );
};

export { Footer };
