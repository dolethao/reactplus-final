import './WelcomeScreen.css'
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = (props) => {

    const navigate = useNavigate();

    const handleGetStart = () => {
        navigate("/registration");
    }

    return (
        <div className="home-screen-container">
            <div className='home-screen-banner'></div>
            <div className='home-screen-content'>
                <div className='welcome'>
                    Welcome to OUR REMINDER
                </div>
                <div className='welcome-explain'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Interdum dictum tempus, interdum at dignissim metus.
                    Ultricies sed nunc.
                </div>
            </div>
            <div className='footer'>
                <button className='btn-getstarts' onClick={handleGetStart}>
                    Get Starts &nbsp;<span><i className="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </div>
    )
}
export default WelcomeScreen