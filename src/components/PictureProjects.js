import Gallery from 'react-grid-gallery';
import { images } from '../images/projects/images';

const PictureProjects = () => {
  return (
    <div className='picture-projects' id='pictures'>
      <h1 className='picture-projects-title'>Pictures</h1>
      <Gallery images={images} backdropClosesModal={true} enableImageSelection={false} rowHeight={100} />
    </div>
  );
}

export default PictureProjects;