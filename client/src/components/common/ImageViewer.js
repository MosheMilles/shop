import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from '@cloudinary/react';

function ImageViewer({image, width, height, quality,alt,className}){
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dz8tawwr7'
        }
      });
      const myImage = cld.image(image);
      myImage.resize(fill().width(width).height(height)).quality(quality);
      return <AdvancedImage cldImg={myImage} alt={alt} className={className} />    

}
export default ImageViewer;