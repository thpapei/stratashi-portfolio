import ImageGallery from 'react-image-gallery';
import { images } from '../images/projects/images';

const PictureProjects = () => {
  return (
    <div className='picture-projects' id='pictures'>
      <h1 className='picture-projects-title'>Pictures</h1>
      <ImageGallery items={images} lazyLoad={true} />
    </div>
  );
}

export default PictureProjects;