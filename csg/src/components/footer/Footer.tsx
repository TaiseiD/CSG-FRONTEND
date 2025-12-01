import Typography from "../typography/Typography";
import './footer.css'

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-newsletter">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Logo" className="logo-image" />
                    </div>
                    <Typography size="text-sm" color="text-dark">
                        Stay informed about student government updates and campus initiatives
                    </Typography>
                    <div className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="newsletter-input"
                        />
                        <button className="newsletter-button">
                            Feedback
                        </button>
                    </div>
                    <Typography size="text-xxsm" color="text-ghost">
                        By subscribing, you agree to our privacy policy and consent to receive updates.
                    </Typography>
                </div>

                <div className="footer-columns">
                    <div className="footer-column">
                        <Typography size="text-sm" color="text-ghost">
                            NAVIGATION
                        </Typography>
                        <h3 className="footer-column-title">Quick links</h3>
                        <ul className="footer-menu">
                            <li><Typography size="text-sm" color="text-dark">Home page</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">About us</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Initiatives</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Meetings</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Contact</Typography></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <Typography size="text-sm" color="text-ghost">
                            QUICK ACCESS
                        </Typography>
                        <h3 className="footer-column-title">Resources</h3>
                        <ul className="footer-menu">
                            <li><Typography size="text-sm" color="text-dark">Reports</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Transparency</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Budget</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Archives</Typography></li>
                            <li><Typography size="text-sm" color="text-dark">Link Text</Typography></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <Typography size="text-sm" color="text-ghost">
                            FOLLOW US
                        </Typography>
                        <h3 className="footer-column-title">Connect with us</h3>
                        <ul className="footer-social">
                            <li className="social-item">
                                <span className="social-icon">f</span>
                                <Typography size="text-sm" color="text-dark">Facebook</Typography>
                            </li>
                            <li className="social-item">
                                <span className="social-icon">📷</span>
                                <Typography size="text-sm" color="text-dark">Instagram</Typography>
                            </li>
                            <li className="social-item">
                                <span className="social-icon">𝕏</span>
                                <Typography size="text-sm" color="text-dark">X</Typography>
                            </li>
                            <li className="social-item">
                                <span className="social-icon">in</span>
                                <Typography size="text-sm" color="text-dark">LinkedIn</Typography>
                            </li>
                            <li className="social-item">
                                <span className="social-icon">▶</span>
                                <Typography size="text-sm" color="text-dark">YouTube</Typography>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-layout">
                    <div className="footer-text">
                        <Typography size="text-xxsm" color="text-dark">
                            © 2024 Student Government Transparency Project. All Rights Reserved
                        </Typography>
                    </div>
                    <div className="footer-links">
                        <Typography size="text-xxsm" color="text-dark">
                            Privacy policy
                        </Typography>
                        <Typography size="text-xxsm" color="text-dark">
                            Terms of services
                        </Typography>
                        <Typography size="text-xxsm" color="text-dark">
                            Cookie settings
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}