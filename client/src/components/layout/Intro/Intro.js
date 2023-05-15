import './Intro.css';
import ImageSlider from './ImageSlider/ImageSlider';
import Sales from './Sales';
function Intro() {
    return (
        <div className="intro">
            <ImageSlider />
            <Sales />
        </div>
    )
};
export default Intro;