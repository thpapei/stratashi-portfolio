import ImageGallery from 'react-image-gallery';
import { images } from '../images/projects/images';

const PictureProjects = () => {
  return (
    <div><ImageGallery items={images} /></div>
  );
}

export default PictureProjects;