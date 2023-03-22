import './styles/ImageSlider.css';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ImageSlider() {
    const images = ["/סופר8.jpg", "/סופר7.jpg", "/סופר6.jpg", "/סופר5.jpg", "/סופר4.jpg", "/סופר3.jpg", "/סופר2.jpg", "/סופר1.jpg"];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="image-container">
            <TransitionGroup>
                <CSSTransition key={images[currentImage]} classNames="fade" timeout={1000}>
                    <img
                        src={images[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className="image"
                    />
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};
export default ImageSlider;