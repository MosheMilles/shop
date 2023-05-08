import './ImageSlider.css';
import { useState, useEffect } from 'react';
import ImageViewer from '../../../common/ImageViewer';

function ImageSlider() {
    const images = ["v1679578710/סופר3_bmjttd.jpg", "v1679578610/סופר6_ctuxj9.jpg", "v1679578710/סופר1_n1k1jk.jpg", "v1679578711/סופר5_doub9n.jpg", "v1679578711/סופר4_bn5klj.jpg", "v1679578712/סופר8_ombdkj.jpg"];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const imagesInterval = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(imagesInterval);
    }, []);

    return (
        <div className="image-container">
            <ImageViewer image={images[currentImage]} width="1600" height="400" quality="auto" alt="super"className="slider" />
         </div>
    );
};
export default ImageSlider;