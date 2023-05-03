import './ImageSlider.css';
import { useState, useEffect } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from '@cloudinary/react';

function ImageSlider() {
    const images = ["v1679578710/סופר3_bmjttd.jpg", "v1679578610/סופר6_ctuxj9.jpg", "v1679578710/סופר1_n1k1jk.jpg", "v1679578711/סופר5_doub9n.jpg", "v1679578711/סופר4_bn5klj.jpg", "v1679578712/סופר8_ombdkj.jpg"];
    const [currentImage, setCurrentImage] = useState(0);

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dz8tawwr7'
        }
    });
    const myImage = cld.image(images[currentImage]);
    myImage.resize(fill().width(1600).height(400)).quality('auto');

    useEffect(() => {
        const imagesInterval = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(imagesInterval);
    }, []);

    return (
        <div className="image-container">
            <AdvancedImage cldImg={myImage} alt="super" className="slider" />
        </div>
    );
};
export default ImageSlider;