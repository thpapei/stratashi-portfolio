import ImageGallery from 'react-image-gallery';
import { images } from '../images/projects/images';

const PictureProjects = () => {
  return (
    <div className='picture-projects'>
      <h1 className='picture-projects-title'>Pictures</h1>
      <ImageGallery items={images} />
    </div>
  );
}

export default PictureProjects;