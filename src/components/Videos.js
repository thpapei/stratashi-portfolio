
import { useState } from 'react';
import ambiance from '../images/projects/video-thumbnails/ambiance3d.jpg';
import HumanConsciousness from '../images/projects/video-thumbnails/HumanConsciousnessProject.jpg';
import nero from '../images/projects/video-thumbnails/nero.jpg';
import thewindupbird from '../images/projects/video-thumbnails/Thewindupbird.jpg';
import Modal from './Modal';
import ReactPlayer from 'react-player/youtube'

const Videos = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleClick = (url) => {
    setUrl(url);
    setIsModalOpen(true);
  }

  return (
    <div className='videos'>
      <h1 className='title'>Videos</h1>
      <div className='items'>
        <img className='item' src={thewindupbird} alt='ambiance' onClick={() => handleClick('https://www.youtube.com/watch?v=1uifXl5VfyA&t=2s')} />
        <img className='item' src={ambiance} alt='ambiance' onClick={() => handleClick('https://www.youtube.com/watch?v=TMXPJklDrhA&t=36s')} />
        <img className='item' src={HumanConsciousness} alt='ambiance' onClick={() => handleClick('https://www.youtube.com/watch?v=r7c_5KNQxok')} />
        <img className='item' src={nero} alt='ambiance' onClick={() => handleClick('https://www.youtube.com/watch?v=2ILLw56OLIQ')} />
        {
          isModalOpen &&
          <Modal setIsModalOpen={setIsModalOpen}>
            <div className='player-container'>
              <ReactPlayer url={url} controls={true} width='80vw' />
            </div>
          </Modal>
        }
      </div>
    </div>
  );
}

export default Videos;